const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const HarvestFarm = await ethers.getContractFactory("HarvestFarm");

  // just for testing!
  const HarvestToken = await ethers.getContractFactory("HarvestToken");
  const Harvest = await HarvestToken.deploy();
  console.log("Harvest address: ", Harvest.address);

  const HarvestTokenAddress = Harvest.address
  const startTime = 1689948000;  // timestamp to start pools
  const runningTime = 3600 * 24 * 365 * 10;  //10 years - 315360000 sec
  const HrvstPerSecond = "198412698400000000"; // 0.1984126984 HRVST per sec
  // Change this to real addresses
  const feeCollector = '0xFD776F681Be9Aa0b7A6736705ADAbF7fa76cB84e'; // Treasury address
  const presaleContract = ''

  const Farm = await HarvestFarm.deploy(
    HarvestTokenAddress, startTime, runningTime, HrvstPerSecond, feeCollector, presaleContract
  );

  console.log("Farm address: ", Farm.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });