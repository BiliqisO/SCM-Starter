Description:
This project consists of a frontend that interacts with a Solidity smart contract deployed on the Ethereum blockchain. The frontend allows users to connect their Ethereum wallets (e.g., MetaMask) and perform operations on the smart contract, including viewing the counter value, incrementing it, and decrementing it. The smart contract, named Assessment.sol, provides a simple counter with increment and decrement functionality.

Project Structure:

src/: Contains the frontend code.
contracts/: Contains the Solidity smart contract code.
Prerequisites:

MetaMask or a compatible Ethereum wallet extension installed in your web browser.
Node.js and npm (Node Package Manager) installed to run the frontend.

Frontend Setup:

Install MetaMask or a compatible Ethereum wallet extension in your web browser.
Configure your wallet and connect it to the sepolia testnet.
Usage:

the Application:

Open your web browser and access the application at the provided URL (usually http://localhost:3000).
Connect Your Wallet:

Click the "Connect your Metamask wallet" button to establish a connection with your Ethereum wallet.
Interact with the Contract:

Once connected, you can:
View your Ethereum account address.
See the current counter value displayed as "Current No."
Use the "Increase Counter" and "Decrease Counter" buttons to interact with the smart contract.

Smart Contract Information:

Contract Address: [0x2faf36708dd04bb36641a79efbf4390313c19413]
Contract Source: contracts/Assessment.sol
Functions:
getCounter(): View the current counter value without modifying it.
increment(): Increase the counter by one.
decrement(): Decrease the counter by one (with a check to prevent negative values).

# Starter Next/Hardhat Project

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost.
Typically at http://localhost:3000/
