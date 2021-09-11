import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

export default {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.4.20",
      },
    ],
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 800,
    },
    evmVersion: "istanbul",
  },
  networks: {
    mainnet: {
      url: "https://rpc.octano.dev",
      chainId: 8,
    },
  },
};
