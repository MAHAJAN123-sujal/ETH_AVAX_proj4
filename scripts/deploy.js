async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const DegenToken = await ethers.getContractFactory("DegenToken");
    const degenToken = await DegenToken.deploy();
  
    await degenToken.deployed();
  
    console.log("DegenToken deployed to:", degenToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  