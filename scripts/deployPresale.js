const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let hrvstTokenAddress = '0x8dB29Cf1Bdf5802Ba94db6822b9af8257ad0C59F'

  const HarvestWhitelistData = await ethers.getContractFactory("HarvestWhitelistData");
  const wlData = await HarvestWhitelistData.deploy()
  const HarvestPresale = await ethers.getContractFactory("HarvestPresale");
  const presale = await HarvestPresale.deploy(1689176108, wlData.address, hrvstTokenAddress);
  console.log("Presale address:", presale.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
