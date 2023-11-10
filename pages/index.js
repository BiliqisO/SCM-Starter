import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../assessmentABI.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(0);

  const contractAddress = "0x2faf36708dd04bb36641a79efbf4390313c19413";
  const atmABI = atm_abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  };

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);

    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  };

  const getCounter = async () => {
    if (atm) {
      setBalance((await atm.getCounter()).toNumber());
    }
  };

  const increaseCounter = async () => {
    if (atm) {
      let tx = await atm.increment();
      await tx.wait();
      getCounter();
    }
  };

  const decreaseCounter = async () => {
    if (atm) {
      let tx = await atm.decrement();
      await tx.wait();
      getCounter();
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>;
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return (
        <button onClick={connectAccount}>
          Please connect your Metamask wallet
        </button>
      );
    }

    // if (balance == undefined && atm) {
    //   getBalance();
    // }

    return (
      <div>
        <p>Your Account: {account}</p>
        <p>Current No: {balance}</p>
        <button onClick={increaseCounter}>Increase Counter</button>
        <button onClick={decreaseCounter}>Decrease Counter</button>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Welcome to the Metacrafters ATM!</h1>
      </header>
      {initUser()}
      <style jsx>
        {`
          .container {
            text-align: center;
          }
        `}
      </style>
    </main>
  );
}
