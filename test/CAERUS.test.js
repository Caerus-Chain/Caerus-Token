const { expect } = require("chai");

describe("CAERUS Token", function () {
  let caerus; 
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    
    // Get the ContractFactory and Signers here.
    const CAERUS = await ethers.getContractFactory("CAERUS");

    // Deploy the contract and get an instance of it
    caerus = await CAERUS.deploy();
    await caerus.deployed();
  });

  describe("Deployment", function () {
    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await caerus.balanceOf(owner.address);
      expect(await caerus.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      // Transfer 50 tokens from owner to addr1
      await caerus.transfer(addr1.address, 50);
      const addr1Balance = await caerus.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      // Transfer 50 tokens from addr1 to addr2
      await caerus.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await caerus.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });

    it("Should fail if sender doesn’t have enough tokens", async function () {
      const initialOwnerBalance = await caerus.balanceOf(owner.address);
      await expect(
        caerus.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

      expect(await caerus.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });
  });
});
