require("dotenv").config();
const { ethers } = require("hardhat");

async function checkBalance(contractAddress, account) {
  const DegenToken = await ethers.getContractAt("DegenToken", contractAddress);
  const balance = await DegenToken.balanceOf(account);
  console.log(`Balance of ${account}: ${balance} DGN`);
}

const contractAddress = "0x3C8Fdba2dC4671bcbd8Fec85091A65c059858f96";
const account = "0x613CdB2bDaF191D274b3A41517bF37D8711f9f20";

checkBalance(contractAddress, account)
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
