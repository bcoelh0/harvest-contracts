const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  //Deploy staking contract
  const stakingContract = await ethers.getContractFactory("BathtubStaking");
  const BathTubStaking = await stakingContract.deploy();
  console.log("Staking contract address: ", BathTubStaking.address);

  //Verify staking contract
  await hre.run("verify:verify", {address: BathTubStaking.address});
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });