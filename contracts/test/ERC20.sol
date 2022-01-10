pragma solidity =0.5.16;

import '../TANERC20.sol';

contract ERC20 is TANERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
