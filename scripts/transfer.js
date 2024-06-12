require("dotenv").config();
const { ethers } = require("hardhat");

async function transferTokens(contractAddress, recipient, amount) {
  const [sender] = await ethers.getSigners();
  const DegenToken = await ethers.getContractAt("DegenToken", contractAddress, sender);
  await DegenToken.transfer(recipient, amount);
  console.log(`Transferred ${amount} tokens to ${recipient}`);
}

const contractAddress = "0x3C8Fdba2dC4671bcbd8Fec85091A65c059858f96";
const recipient = "0x613CdB2bDaF191D274b3A41517bF37D8711f9f20";
const amount = 500;

transferTokens(contractAddress, recipient, amount)
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
