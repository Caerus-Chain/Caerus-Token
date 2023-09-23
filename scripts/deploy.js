const hre = require("hardhat");

async function main() {
  // Retrieve accounts from the local node
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy CAERUS contract
  const CAERUS = await hre.ethers.getContractFactory("CAERUS");
  const caerus = await CAERUS.deploy();
  await caerus.deployed();

  console.log("CAERUS contract deployed to:", caerus.address);
}

// Run the deployment and handle any potential errors
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
