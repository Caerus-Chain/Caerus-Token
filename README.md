# CAERUS Token Contract
## Overview
This repository contains the implementation and tests for the CAERUS Token, an ERC20 token built using Solidity and Hardhat. The CAERUS Token is a standard ERC20 token with an initial supply of 1,000,000,000 tokens, minted during the contract's deployment.

## Prerequisites
- **Node.js** v12+ LTS and npm (comes with Node)
- **Hardhat**

## Installation
Clone the repository:
```
git clone https://github.com/Caerus-Chain/caerus-token
```
Navigate to the project folder:
```
cd caerus-token
```
Install dependencies:
```
npm install
```

## Set Up Configuration:
1. Review the .example.env file.
2. Create a .env file based on the example and adjust the values as needed.

For Linux or macOS:
```
cp .example.env .env
```
For Windows:
```
copy .example.env .env
```

## Compilation
Compile the smart contracts using Hardhat:
```
npx hardhat compile
```

## Quick Start Guide
### 1. Testing
Run the following command to execute the contract tests. Make sure you've written the tests in your Hardhat project's `test` directory.
```
npx hardhat test
```

### 2. Deployment:
Run the following command to compile the contracts using the Solidity compiler and deploy the `CAERUS` to your Caerus network.
```
npx hardhat run scripts/deploy.js --network caerus
```

## Conclusion
If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!