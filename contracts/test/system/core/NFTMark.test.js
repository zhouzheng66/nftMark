const { ethers } = require("hardhat");
const { expect } = require("chai");
describe("NFTMark", function () {
  let erc721;
  let erc20;
  let nftMark;
  let depolyer, addr1;

  beforeEach(async () => {
    // deploy
    [depolyer, addr1] = await ethers.getSigners();
    const erc20C = await ethers.getContractFactory("ZZToken");
    const erc721C = await ethers.getContractFactory("MyNFT");
    erc20 = await erc20C.deploy();
    erc721 = await erc721C.deploy();

    const nftMarkC = await ethers.getContractFactory("NFTMark");
    await erc20.waitForDeployment();
    await erc721.waitForDeployment();
    console.log(erc20.target);
    nftMark = await nftMarkC.deploy(erc20.target, erc721.target);

    await nftMark.waitForDeployment();
  });
  it("should be create a deal", async () => {
    await erc20.mint(depolyer.address, 100);
    await erc721.safeMint(depolyer.address);

    await erc721.connect(depolyer).approve(nftMark.target, 0);
    console.log("test");
    let price = 300;
    await expect(await nftMark.connect(depolyer).addOrder(0, price))
      .to.be.emit(nftMark, "AddOrder")
      .withArgs(depolyer.address, 0, price);
  });
});
