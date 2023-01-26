import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config } from "dotenv";

config();

let privateKey = process.env.PRIVATE_KEY || "";

const hardhatConfig: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_URL,
      accounts: [privateKey],
    },
  },
};

export default hardhatConfig;
