// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CAERUS is ERC20 {
    constructor() ERC20("CAERUS Token", "CAERUS") {
        _mint(msg.sender, 1000000000 ether);
    }
}
