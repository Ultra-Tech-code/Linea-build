import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

let INFURA_API_KEY = process.env.INFURA_API_KEY
let PRIVATE_KEY = process.env.PRIVATE_KEY
let LINEASCAN_API_KEY = process.env.LINEASCAN_API_KEY

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    linea_testnet: {
      url: `https://linea-goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY as string],
    },
    linea_mainnet: {
      url: `https://linea-mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: {
      linea_testnet: LINEASCAN_API_KEY as string
    },
    customChains: [
      {
        network: "linea_testnet",
        chainId: 59140,
        urls: {
          apiURL: "https://api-testnet.lineascan.build/api",
          browserURL: "https://goerli.lineascan.build/address"
        }
      }
    ]
  }
};

export default config;
