const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const HarvestIncinerator = await ethers.getContractFactory("HarvestIncinerator");
  const incinerator = await HarvestIncinerator.deploy('0x8dB29Cf1Bdf5802Ba94db6822b9af8257ad0C59F', '100000000000000');

  console.log("incinerator address: ", incinerator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });