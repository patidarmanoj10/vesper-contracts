// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "../../../interfaces/convex/IConvex.sol";
import "../../../interfaces/convex/IConvexToken.sol";
import "../../curve/3Pool/Curve3PlainPool.sol";
import "../ConvexBase.sol";

/// @title This strategy will deposit collateral token in Curve 3Pool and stake lp token to convex.
contract Convex3PlainPool is Curve3PlainPool, ConvexBase {
    using SafeERC20 for IERC20;

    constructor(
        address pool_,
        address crvPool_,
        uint256 crvSlippage_,
        address masterOracle_,
        address swapper_,
        uint256 collateralIdx_,
        uint256 convexPoolId_,
        string memory name_
    )
        Curve3PlainPool(pool_, crvPool_, crvSlippage_, masterOracle_, swapper_, collateralIdx_, name_)
        ConvexBase(convexPoolId_)
    {
        (address _lp, , , , , ) = BOOSTER.poolInfo(convexPoolId_);
        require(_lp == address(crvLp), "incorrect-lp-token");
    }

    function lpBalanceStaked() public view override returns (uint256 total) {
        total = cvxCrvRewards.balanceOf(address(this));
    }

    function _approveToken(uint256 amount_) internal virtual override {
        crvLp.safeApprove(address(BOOSTER), amount_);
        super._approveToken(amount_);
    }

    function _claimRewards() internal override {
        require(cvxCrvRewards.getReward(address(this), true), "reward-claim-failed");
    }

    function _stakeAllLp() internal override {
        uint256 balance = crvLp.balanceOf(address(this));
        if (balance > 0) {
            require(BOOSTER.deposit(convexPoolId, balance, true), "booster-deposit-failed");
        }
    }

    /**
     * @notice Unstake all LPs
     * @dev This function is called by `_beforeMigration()` hook
     * Should claim rewards that will be swept later
     */
    function _unstakeAllLp() internal override {
        cvxCrvRewards.withdrawAllAndUnwrap(true);
    }

    /**
     * @notice Unstake LPs
     * Don't claiming rewards because `_claimRewards()` already does that
     */
    function _unstakeLp(uint256 _amount) internal override {
        if (_amount > 0) {
            require(cvxCrvRewards.withdrawAndUnwrap(_amount, false), "withdraw-and-unwrap-failed");
        }
    }

    /// @dev convex pool can add new rewards. This method refresh list.
    function setRewardTokens(
        address[] memory /*_rewardTokens*/
    ) external override onlyKeeper {
        // Claims all rewards, if any, before updating the reward list
        _claimRewardsAndConvertTo(address(collateralToken));
        rewardTokens = _getRewardTokens();
        _approveToken(0);
        _approveToken(MAX_UINT_VALUE);
    }
}
