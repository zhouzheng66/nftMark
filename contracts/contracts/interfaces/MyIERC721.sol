//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface MyIERC721 is IERC721{
    function safeMint(address to, uint256 tokenId) external;
    function getApproved(uint256 tokenId) external view returns (address operator);
    function transferFrom(address from, address to, uint256 tokenId) external;
    
}
