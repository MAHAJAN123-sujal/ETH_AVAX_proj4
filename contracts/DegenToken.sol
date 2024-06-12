// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DegenToken is ERC20 {
    address public owner;
    constructor() ERC20("DegenToken", "DGN") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    function decimals() public view virtual override returns (uint8) {
        return 0;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function redeem(string memory item) external {
        uint256 cost;
        if (keccak256(bytes(item)) == keccak256(bytes("avatar"))) {
            cost = 100;
        } else if (keccak256(bytes(item)) == keccak256(bytes("vehicle"))) {
            cost = 100;
        } else if (keccak256(bytes(item)) == keccak256(bytes("mystery"))) {
            cost = 60;
        } else {
            revert("Invalid item");
        }

        require(balanceOf(msg.sender) >= cost, "Insufficient balance");
        _burn(msg.sender, cost);
    }
}
