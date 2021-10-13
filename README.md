# nCeption - The dream is real

## Description

nCeption is a Ubiq network fork of [the n Project](https://twitter.com/the_n_project_) on Ethereum. Changes being it costs 88 UBQ to claim an N NFT with those funds being sent to a Burner contract address. This mimics the Ethereum network where a 0 cost but extremely high gas fee effectively made the N numbers expensive to purchase. These were also quickly sought after on secondary markets where they became cost prohibitive to acquire and therefore experiment with. The problem with being overly popular with limited supply on an expensive network.

Running on Ubiq, nCeption should give plentiful spare N NFTs to experience the act of ownership and therefore experimentation for developers. Any derivative works will also have an active audience to display your creativities.

## Smart Contracts

Smart contracts are written in Solidity and managed via Hardhat.

The Burner contract is modified from one [originally created](https://ethereum.stackexchange.com/a/17617) by Jeff Wilcke. The main modification involves changing the caller of the Purge action to reduce the received balance from 0.01% to 0.001%. This Burner contract is preferred over sending "burned" funds to a null burner address as it efficiently creates a self destructing smart contract which removes the UBQ from the state history.

### Steps

`yarn install` - Install packages

`npx hardhat compile` - Compile contracts

`npx hardhat test` - Run the test suite

`npx hardhat node` - Run a local testing node

`npx hardhat deploy --network localhost` - Deploy to local testing node

`npx hardhat deploy --network kovan` - Deploy to Kovan Testnet

`npx hardhat --network kovan etherscan-verify --api-key <api-key>` - Etherscan Verify the Kovan Testnet deployment

`npx hardhat --network kovan sourcify` - Sourcify the Kovan Testnet deployment

## Deployments

Ubiq:
* Burner: https://ubiqscan.io/address/0x3605d4B5ed61236A516ae3B988d39B65a57Af157
* N: https://ubiqscan.io/address/0x81f1a6e026d49c2260a8D6D8e14Bca1628c1Df43
* nCeption verified on Sourcify: [0x81f1a6e026d49c2260a8D6D8e14Bca1628c1Df43](https://repo.sourcify.dev/contracts/full_match/8/0x81f1a6e026d49c2260a8D6D8e14Bca1628c1Df43/)

Kovan Testnet:
* Burner: https://kovan.etherscan.io/address/0x7903f67e58b35e611fb3503f1246912d01cb4e32
* N: https://kovan.etherscan.io/address/0x7dd3e993eb44160651f46951e7779572ab39aef9

nCeption is deployed on Kovan Testnet with a 0.0088 ETH Claim fee
