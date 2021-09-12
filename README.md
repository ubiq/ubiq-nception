# nCeption - The dream is real

## Description

nCeption is a fork of the n Project on Ethereum. Changes being it costs 88 UBQ to claim an N NFT with those funds being sent to a burn address. This mimics the Ethereum network where a 0 cost but extremely high gas fee effectively made the N numbers expensive to purchase. These where also quickly sought after on secondary markets where they became cost prohibitive to aquire and therefore experiment with. The problem with being over popular with limited supply.

Running on Ubiq, nCeption should give plentiful spare N NFTs to experience the act of ownership and therefore experimentation for developers. Any derivative works will also have an active audience to display your creativities.

## Smart Contracts

Smart contract are written in Solidity and managed via hardhat.

### Steps

`yarn install` - Install packages

`npx hardhat compile` - Compile contracts

`npx hardhat test` - Run the test suite

`npx hardhat node` - Run a local testing node

`npx hardhat deploy --network localhost` - Deploy to local testing node

`npx hardhat deploy --network kovan` - Deploy to Kovan Testnet

`npx hardhat --network kovan etherscan-verify --api-key <api-key>` - Etherscan Verify the Kovan Testnet deployment

`npx hardhat --network kovan sourcify` - Sourcify the Kovan Testnet deployment
