const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const HarvestWhitelistData = await ethers.getContractFactory("HarvestWhitelistData");
  const wlData = await HarvestWhitelistData.deploy()
  const HarvestPresale = await ethers.getContractFactory("HarvestPresale");
  const presale = await HarvestPresale.deploy('100000000000000000000', 1688978999, wlData.address);
  console.log("Presale address:", presale.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
