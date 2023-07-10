const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const stakedTokenAddress = "0xe5b8C3381C0A2544883CfF9dDaf1e48D9dea9E49";
  const rewardTokenaddress = "0x912ce59144191c1204e64559fe8253a0e49e6548"
  const rewardsPerSecond = "1000000000000000"; // 0.001 ARB per sec
  const lockDays = 0;
  const lockPenalty = 0;
  const admin = deployer.address;

  //Deploy staking contract
  const stakingContract = await ethers.getContractFactory("BathtubStaking");
  const BathTubStaking = await stakingContract.attach("0x0F8764b41c04C878fa155b0D8a46eEbf8174a63c"); // Add staking contract address here

  await BathTubStaking.initialize(
    stakedTokenAddress,
    rewardTokenaddress,
    rewardsPerSecond,
    lockDays,
    lockPenalty,
    admin
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  // hh run scripts/initializeStaking.js --network arbitrumOne