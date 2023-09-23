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
// Deploying contracts with the account: 0xa40aa030A3ba4f42FDCd2B7bC33d5B03770290ea
// CAERUS contract deployed to: 0x712fF5DD7D30898b8DF9366C6b2793F3AF96636D