const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let hrvstTokenAddress = '0x8dB29Cf1Bdf5802Ba94db6822b9af8257ad0C59F'
  let hrvstPresaleAddress = '0xa7D4cfD62cf455DC83563025c7Fc033a59fD59CB'

  const HarvestAirdrop = await ethers.getContractFactory("HarvestAirdrop")
  const airdrop = await HarvestAirdrop.deploy(hrvstTokenAddress, hrvstPresaleAddress)

  console.log("airdrop address:", airdrop.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
