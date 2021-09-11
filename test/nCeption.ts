// Load dependencies
import { expect } from "chai";
import { ethers } from "hardhat";
import { beforeEach } from "mocha";
import { Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("nCeption - The dream is real", function () {
  let nContract: Contract;
  let owner: SignerWithAddress;
  let address1: SignerWithAddress;
  let address2: SignerWithAddress;

  beforeEach(async () => {
    const N = await ethers.getContractFactory("N");
    [owner, address1, address2] = await ethers.getSigners();
    nContract = await N.deploy();
  });

  it("Should set the right owner", async () => {
    expect(await nContract.owner()).to.equal(await owner.address);
  });

  it("Should fail to mint an N for Token ID 0", async () => {
    await expect(nContract.claim(0)).to.be.revertedWith("Token ID invalid");
  });

  it("Should fail to mint an N for Token ID 8889", async () => {
    await expect(nContract.claim(8889)).to.be.revertedWith("Token ID invalid");
  });

  it("Should mint an N with Token ID 1", async () => {
    expect(await nContract.claim(1)).to.emit(
      nContract,
      "Transfer"
    );
  });
});