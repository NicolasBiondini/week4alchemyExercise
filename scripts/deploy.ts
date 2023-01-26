import { ethers } from "hardhat";

const CONTRACT_ADDR = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
  const Contract = await ethers.getContractFactory("Contract");
  const contract = await Contract.deploy();

  await contract.deployed();

  await contract.triggerAttempt(CONTRACT_ADDR);

  console.log(`Contract deployed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
