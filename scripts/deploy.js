const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Burner = await ethers.getContractFactory("Burner");
    const burner = await Burner.deploy()
    console.log("Burner contract address:", burner.address);

    const N = await ethers.getContractFactory("N");
    const n = await N.deploy(burner.address, 88000000000000000000n)
  
    console.log("nCeption contract address:", n.address);
}
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
