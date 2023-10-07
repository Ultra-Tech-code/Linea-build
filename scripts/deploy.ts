import { ethers } from "hardhat";

async function main() {

  const TestContract = await ethers.deployContract("TestContract");

  await TestContract.waitForDeployment();

  console.log(`TestContract deployed to ${TestContract.target}`);

   /**Interact with the simple wallet contract */
   const TestContractInstance = await ethers.getContractAt("TestContract", TestContract.target);
   
   // call the setGreetings function
   const tx = await TestContractInstance.setGreetings("World");

  // call the getGreetings function
  const greetings = await TestContractInstance.getGreetings();
  console.log(`Greetings: ${greetings}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
