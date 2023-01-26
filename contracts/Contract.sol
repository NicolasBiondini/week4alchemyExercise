// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface EmitContract {
    function attempt() external;
}

contract Contract {
    function triggerAttempt(address emmiterContractAddress) external {
        EmitContract(emmiterContractAddress).attempt();
    }
}