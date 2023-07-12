const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const HarvestTokenContract = await ethers.getContractFactory("HarvestToken");
  const HarvestToken = await HarvestTokenContract.deploy();
  console.log("Token address:", HarvestToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
