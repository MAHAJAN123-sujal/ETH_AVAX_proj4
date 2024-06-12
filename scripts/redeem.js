require("dotenv").config();
const { ethers } = require("hardhat");

async function redeemTokens(contractAddress, item) {
  const [redeemer] = await ethers.getSigners();
  const DegenToken = await ethers.getContractAt("DegenToken", contractAddress, redeemer);
  await DegenToken.redeem(item);
  console.log(`Redeemed ${item}`);
}

const contractAddress = "0x3C8Fdba2dC4671bcbd8Fec85091A65c059858f96";
const item = "avatar"; // or "vehicle" or "mystery"

redeemTokens(contractAddress, item)
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
