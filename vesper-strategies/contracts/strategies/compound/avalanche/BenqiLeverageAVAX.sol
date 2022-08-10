// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "./CompoundLikeLeverage.sol";

// solhint-disable no-empty-blocks

/// @title This strategy will deposit collateral token in Benqi and based on position
/// it will borrow same collateral token. It will use borrowed asset as supply and borrow again.
contract BenqiLeverageAVAX is CompoundLikeLeverage {
    constructor(
        address _pool,
        address _swapManager,
        address _comptroller,
        address _rewardToken,
        address _aaveAddressProvider,
        address _receiptToken,
        string memory _name
    )
        CompoundLikeLeverage(
            _pool,
            _swapManager,
            _comptroller,
            _rewardToken,
            _aaveAddressProvider,
            _receiptToken,
            _name
        )
    {}

    function _mint(uint256 _amount) internal override {
        _withdrawETH(_amount);
        cToken.mint{value: _amount}();
    }

    function _redeemUnderlying(uint256 _amount) internal override {
        super._redeemUnderlying(_amount);
        _depositETH();
    }

    function _borrowCollateral(uint256 _amount) internal override {
        super._borrowCollateral(_amount);
        _depositETH();
    }

    function _repayBorrow(uint256 _amount) internal override {
        _withdrawETH(_amount);
        cToken.repayBorrow{value: _amount}();
    }

    function _depositETH() internal {
        TokenLike(WAVAX).deposit{value: address(this).balance}();
    }

    function _withdrawETH(uint256 _amount) internal {
        TokenLike(WAVAX).withdraw(_amount);
    }
}
