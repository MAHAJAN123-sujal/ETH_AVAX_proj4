require("dotenv").config();
const { ethers } = require("hardhat");

async function mintTokens(contractAddress, recipient, amount) {
  const [owner] = await ethers.getSigners();
  const DegenToken = await ethers.getContractAt("DegenToken", contractAddress, owner);
  await DegenToken.mint(recipient, amount);
  console.log(`Minted ${amount} tokens to ${recipient}`);
}

const contractAddress = "0x3C8Fdba2dC4671bcbd8Fec85091A65c059858f96";
const recipient = "0x613CdB2bDaF191D274b3A41517bF37D8711f9f20";
const amount = 1000;

mintTokens(contractAddress, recipient, amount)
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
