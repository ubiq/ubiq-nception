import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import 'hardhat-deploy';

import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';

dotenv.config();
/* This loads the variables in your .env file to `process.env` */

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

const { ALCHEMY_KOVAN_API_KEY } = process.env;

function getMnemonic(networkName?: string): string {
  if (networkName) {
    const mnemonic = process.env['MNEMONIC_' + networkName.toUpperCase()];
    if (mnemonic && mnemonic !== '') {
      return mnemonic;
    }
  }

  const mnemonic = process.env.MNEMONIC;
  if (!mnemonic || mnemonic === '') {
    return 'test test test test test test test test test test test junk';
  }
  return mnemonic;
}

function accounts(networkName?: string): {mnemonic: string} {
  return {mnemonic: getMnemonic(networkName)};
}

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
          evmVersion: "istanbul",
        },
      },
      {
        version: "0.4.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 800,
          },
          evmVersion: "istanbul",
        },
      },
    ],
  },
  networks: {
    localhost: {
      accounts: accounts(),
    },
    mainnet: {
      url: "http://127.0.0.1:8588",
      chainId: 8,
      gasPrice: 11000000000,
    },
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_KOVAN_API_KEY}`,
      chainId: 42,
      accounts: accounts('kovan'),
      gasPrice: 1100000000,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      "mainnet": '0xc5070A5CB93F4497240a57969485C0FbF5c2ee3A',
      "kovan": '0x2EF7526b624136b2EE8B426c620C3E6b3997F24e',
    },
  },
};

export default config;