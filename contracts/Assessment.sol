// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Assessment {

    uint256 public counter;

   
    // Function to get the current counter value
    function getCounter() public view returns (uint256) {
        return counter;
    }

    // Function to increment the counter
    function increment() public {
        counter++;
    }

    // Function to decrement the counter
    function decrement() public {
        require(counter > 0, "Counter cannot be negative");
        counter--;
    }
}


