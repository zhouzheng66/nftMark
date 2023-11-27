import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("NFTMark",async function(){
    let erc721 : Contract;
    let erc20 : Contract;
    let nftMark : Contract;
    let depolyer,addr1 : any;
    [depolyer,addr1] = await ethers.getSigners();
    beforeEach(async () =>{
        // deploy
        const erc20C = await ethers.getContractFactory("ZZToken");
        const erc721C = await ethers.getContractFactory("MyERC721");
        erc20 = await erc20C.deploy();
        erc721 = await erc721C.deploy();
        const nftMarkC = await ethers.getContractFactory("NFTMark");
        nftMark = await nftMarkC.deploy(erc721.address,erc20.address);

       
    });
     it("should be create a deal",async()=>{
            await erc721.safemint();
            console.log("test")
            // await erc721.connect(depolyer).approve(addr1.address,0);
        })

})