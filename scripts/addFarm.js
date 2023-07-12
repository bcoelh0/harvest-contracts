const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const HarvestFarm = await ethers.getContractFactory("HarvestFarm");
  const farm = await HarvestFarm.attach("0x7b388545fc0E2bC0214FfD3913B1FDCE0d39923d");

  // const HarvestToken = await ethers.getContractFactory("HarvestToken");
  // const hrvst = await HarvestToken.attach('0x8dB29Cf1Bdf5802Ba94db6822b9af8257ad0C59F');



  // HRVST token
  // let tx = await farm.add(
  //   5000, // 50% allocation
  //   '0x8dB29Cf1Bdf5802Ba94db6822b9af8257ad0C59F', // use HRVST address here
  //   200, // 2% deposit fee
  //   0, // 0% withdraw fee
  //   true, // with update
  //   0 // last reward time
  // );
  // console.log("Pool 0 added: ", tx.hash);

  // WETH
  tx = await farm.add(
    2500, // 25% allocation
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    200, // 2% deposit fee
    0, // 0% withdraw fee
    true, // with update
    0 // last reward time
  );
  console.log("Pool 1 added: ", tx.hash);

  // ARB
  tx = await farm.add(
    1000, // 10% allocation
    '0x912CE59144191C1204E64559FE8253a0e49E6548',
    200, // 2% deposit fee
    0, // 0% withdraw fee
    true, // with update
    0 // last reward time
  );
  console.log("Pool 2 added: ", tx.hash);

  // USDC
  tx = await farm.add(
    1000, // 10% allocation
    '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    200, // 2% deposit fee
    0, // 0% withdraw fee
    true, // with update
    0 // last reward time
  );
  console.log("Pool 3 added: ", tx.hash);

  // PENDLE
  tx = await farm.add(
    500, // 5% allocation
    '0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8',
    200, // 2% deposit fee
    0, // 0% withdraw fee
    true, // with update
    0 // last reward time
  );
  console.log("Pool 4 added: ", tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });