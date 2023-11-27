//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface MyIERC20   {
    function safeMint(address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}
