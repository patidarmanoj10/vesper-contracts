'use strict'

const { ethers } = require('hardhat')
const Address = require('./address')
const StrategyTypes = require('../../utils/strategyTypes')
const { CurvePoolTypes } = require('../../utils/curvePoolTypes')

const swapper = Address.Vesper.Swapper
const masterOracle = Address.Vesper.MasterOracle
const config = { debtRatio: 0, externalDepositFee: 0 }

const setup = {
  feeCollector: Address.Vesper.FEE_COLLECTOR,
  keepers: [Address.Vesper.KEEPER],
}

/* eslint-disable camelcase */
const StrategyConfig = {
  Curve_sETH_ETH: {
    contract: 'CurveETH',
    type: StrategyTypes.CURVE,
    constructorArgs: {
      crvPool: Address.Curve.SETH_ETH_POOL,
      curvePoolType: CurvePoolTypes.PLAIN_2_POOL,
      crvDeposit: ethers.constants.AddressZero,
      crvToken: Address.Curve.CRV,
      crvSlippage: 100, // 1%
      masterOracle,
      swapper,
      collateralIdx: 0,
      strategyName: 'Curve_sETH_ETH',
      wethLike: Address.WETH,
    },
    config: { ...config },
    setup: { ...setup },
  },
}

module.exports = Object.freeze(StrategyConfig)