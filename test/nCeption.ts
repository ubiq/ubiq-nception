// Load dependencies
import { expect } from "chai";
import { ethers } from "hardhat";
import { beforeEach } from "mocha";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("nCeption - The dream is real", function () {
  let nContract: Contract;
  let burnerContract: Contract;
  let owner: SignerWithAddress;
  let address1: SignerWithAddress;
  let address2: SignerWithAddress;
  const nClaimPrice = 88000000000000000000n;

  beforeEach(async () => {
    const Burner = await ethers.getContractFactory("Burner");
    burnerContract = await Burner.deploy();

    const N = await ethers.getContractFactory("N");
    [owner, address1, address2] = await ethers.getSigners();
    nContract = await N.deploy(burnerContract.address, nClaimPrice);
  });

  it("Should set the right owner", async () => {
    expect(await nContract.owner()).to.equal(await owner.address);
  });

  it("Should fail to mint an N for Token ID 0", async () => {
    await expect(nContract.claim(0, { value: nClaimPrice })).to.be.revertedWith("Token ID invalid");
  });

  it("Should fail to mint an N for Token ID 8889", async () => {
    await expect(nContract.claim(8889, { value: nClaimPrice })).to.be.revertedWith("Token ID invalid");
  });

  it("Should fail to mint an N when incorrect value sent", async () => {
    await expect(nContract.claim(1, { value: 10 })).to.be.revertedWith("UBQ value sent is not correct");
  });

  it("Should mint an N with Token ID 1", async () => {
    await expect(nContract.claim(1, { value: nClaimPrice }))
      .to.emit(nContract, "Transfer")
      .withArgs(ethers.constants.AddressZero, owner.address, 1);
  });

  it("Should fail to mint an N ID that has already been minted", async () => {
    await nContract.claim(1, { value: nClaimPrice });
    await expect(nContract.claim(1, { value: nClaimPrice })).to.be.revertedWith("ERC721: token already minted");
  });

  it("Should increment total supply", async () => {
    await nContract.claim(1, { value: nClaimPrice });
    await nContract.claim(2, { value: nClaimPrice });
    expect(await nContract.totalSupply()).to.be.equal('0x02');
  });
});
