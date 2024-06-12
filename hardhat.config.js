require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    fuji: {
      url: process.env.INFURA_AVALANCHE_FUJI_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};