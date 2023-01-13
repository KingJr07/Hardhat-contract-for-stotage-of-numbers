require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require('solidity-coverage');
require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_RPC_URL=process.env.GOERLI_RPC_URL || "https://eth-goerli.g.alchemy.com/v2/";
const PRIVATE_KEY= process.env.PRIVATE_KEY ||"MetaMask private key";
const ETHERSCAN_APIKEY=process.env.ETHERSCAN_APIKEY;
const COINMARKETCAP=process.env.COINMARKETCAP;
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    goerli:{
      url:GOERLI_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId:5
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId:31337
    }
  },
  etherscan:{
    apiKey:ETHERSCAN_APIKEY
  },
  gasReporter:{
    enabled:true,
    outputFile:"gas-reporter.txt",
    noColors:true,
    currency:"USD",
    coinmarketcap:COINMARKETCAP,
    token:"AVAX"
  },
  solidity: "0.8.7",

};
