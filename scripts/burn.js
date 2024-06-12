require("dotenv").config();
const { ethers } = require("hardhat");

async function burnTokens(contractAddress, amount) {
  const [owner] = await ethers.getSigners();
  const DegenToken = await ethers.getContractAt("DegenToken", contractAddress, owner);
  await DegenToken.burn(amount);
  console.log(`Burned ${amount} tokens`);
}

const contractAddress = "0x3C8Fdba2dC4671bcbd8Fec85091A65c059858f96";
const amount = 1000;

burnTokens(contractAddress, amount)
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
