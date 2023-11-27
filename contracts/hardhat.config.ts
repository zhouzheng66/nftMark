require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");
// import { task } from "hardhat/config";
const { task } = require("hardhat/config");
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks : {
    hardhat : {
      chainId : 1337
    },
    OKTC: {
      url: 'https://exchaintestrpc.okex.org',
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 'auto',
      timeout: 20000
    }
  }
};
task("accounts","print the list of accounts",async (taskArgs,hre) => {
 
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
    ``;
  }
})
