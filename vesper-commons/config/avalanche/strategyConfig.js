'use strict'

const Address = require('./address')
const StrategyTypes = require('../../utils/strategyTypes')

const swapper = Address.Vesper.Swapper
const config = { debtRatio: 0, externalDepositFee: 0 }
const setup = {
  feeCollector: Address.Vesper.FEE_COLLECTOR,
  keepers: [Address.Vesper.KEEPER, Address.Vesper.MP, Address.Vesper.JCV],
}

// TODO update setup to remove strategy type, once done remove type from heres too
/* eslint-disable camelcase */
const StrategyConfig = {
  AaveV3DAIe: {
    contract: 'AaveV3',
    type: StrategyTypes.AAVE,
    constructorArgs: {
      swapper,
      receiptToken: Address.Aave.avDAI,
      aaveAddressProvider: Address.Aave.AddressProvider,
      strategyName: 'AaveV3-DAIe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  AaveV3_Vesper_Xy_ETH_DAIe: {
    contract: 'AaveV3VesperXy',
    type: StrategyTypes.AAVE_VESPER_XY,
    constructorArgs: {
      swapper,
      receiptToken: Address.Aave.avWETH,
      borrowToken: Address.DAIe,
      aaveAddressProvider: Address.Aave.AddressProvider,
      vPool: Address.Vesper.vaDAIe,
      vsp: Address.Vesper.VSP,
      strategyName: 'AaveV3_Vesper_Xy_ETH_DAIe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  Curve_aave_DAIe: {
    contract: 'Curve3LendingPool',
    type: StrategyTypes.CURVE,
    constructorArgs: {
      crvPool: Address.Curve.AAVE_POOL,
      swapper,
      collateralIdx: 0,
      strategyName: 'Curve_aave_DAIe',
    },
    config: { ...config, externalDepositFee: 0 },
    setup: { ...setup },
  },

  Curve_aave_USDCe: {
    contract: 'Curve3LendingPool',
    type: StrategyTypes.CURVE,
    constructorArgs: {
      crvPool: Address.Curve.AAVE_POOL,
      swapper,
      collateralIdx: 1,
      strategyName: 'Curve_aave_USDCe',
    },
    config: { ...config, externalDepositFee: 0 },
    setup: { ...setup },
  },

  Curve_ren_RenBTCe: {
    contract: 'Curve2LendingPool',
    type: StrategyTypes.CURVE,
    constructorArgs: {
      crvPool: Address.Curve.AVWBTCRENBTC_POOL,
      swapper,
      collateralIdx: 1,
      strategyName: 'Curve_ren_RenBTCe',
    },
    config: { ...config },
    setup: { ...setup },
  },

  TraderJoeStrategyUSDCe: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.TRADER_JOE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      receiptToken: Address.TraderJoe.jUSDC,
      strategyName: 'TraderJoeStrategyUSDCe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeStrategyUSDC: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.TRADER_JOE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      receiptToken: Address.TraderJoe.jUSDCNative,
      strategyName: 'TraderJoeStrategyUSDC',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeStrategyAVAX: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.TRADER_JOE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      receiptToken: Address.TraderJoe.jAVAX,
      strategyName: 'TraderJoeStrategyAVAX',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeStrategyWETHe: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.TRADER_JOE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      receiptToken: Address.TraderJoe.jWETH,
      strategyName: 'TraderJoeStrategyWETHe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeStrategyDAIe: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.TRADER_JOE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      receiptToken: Address.TraderJoe.jDAI,
      strategyName: 'TraderJoeStrategyDAIe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeStrategyWBTCe: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.TRADER_JOE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      receiptToken: Address.TraderJoe.jWBTC,
      strategyName: 'TraderJoeStrategyWBTCe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiStrategyUSDCe: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.COMPOUND,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      receiptToken: Address.Benqi.qiUSDC,
      strategyName: 'BenqiStrategyUSDCe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },
  BenqiStrategyDAIe: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.COMPOUND,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      receiptToken: Address.Benqi.qiDAI,
      strategyName: 'BenqiStrategyDAIe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },
  BenqiStrategyWETHe: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.COMPOUND,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      receiptToken: Address.Benqi.qiETH,
      strategyName: 'BenqiStrategyWETHe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiStrategyWBTCe: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.COMPOUND,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      receiptToken: Address.Benqi.qiBTC,
      strategyName: 'BenqiStrategyWBTCe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiStrategyUSDC: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.COMPOUND,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      receiptToken: Address.Benqi.qiUSDCn,
      strategyName: 'BenqiStrategyUSDC',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiStrategyAVAX: {
    contract: 'BenqiStrategyAVAX',
    type: StrategyTypes.COMPOUND,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      receiptToken: Address.Benqi.qiAVAX,
      strategyName: 'BenqiStrategyAVAX',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiStrategyQI: {
    contract: 'CompoundLikeStrategy',
    type: StrategyTypes.COMPOUND,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      receiptToken: Address.Benqi.qiQI,
      strategyName: 'BenqiStrategyQI',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiLeverageStrategyUSDC: {
    contract: 'BenqiLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.Benqi.qiUSDCn,
      strategyName: 'BenqiLeverageStrategyUSDC',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiLeverageStrategyUSDCe: {
    contract: 'BenqiLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.Benqi.qiUSDC,
      strategyName: 'BenqiLeverageStrategyUSDCe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiLeverageStrategyDAIe: {
    contract: 'BenqiLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.Benqi.qiDAI,
      strategyName: 'BenqiLeverageStrategyDAIe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiLeverageStrategyAVAX: {
    contract: 'BenqiLeverageStrategyAVAX',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.Benqi.qiAVAX,
      strategyName: 'BenqiLeverageStrategyAVAX',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiLeverageStrategyWBTCe: {
    contract: 'BenqiLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.Benqi.qiBTC,
      strategyName: 'BenqiLeverageStrategyWBTCe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  BenqiLeverageStrategyWETHe: {
    contract: 'BenqiLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.Benqi.qiETH,
      strategyName: 'BenqiLeverageStrategyWETHe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeLeverageStrategyWETHe: {
    contract: 'TraderJoeLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.TraderJoe.jWETH,
      strategyName: 'TraderJoeLeverageStrategyWETHe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeLeverageStrategyAVAX: {
    contract: 'TraderJoeLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.TraderJoe.jAVAX,
      strategyName: 'TraderJoeLeverageStrategyAVAX',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeLeverageStrategyDAIe: {
    contract: 'TraderJoeLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.TraderJoe.jDAI,
      strategyName: 'TraderJoeLeverageStrategyDAIe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeLeverageStrategyUSDCe: {
    contract: 'TraderJoeLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.TraderJoe.jUSDC,
      strategyName: 'TraderJoeLeverageStrategyUSDCe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeLeverageStrategyUSDC: {
    contract: 'TraderJoeLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.TraderJoe.jUSDCNative,
      strategyName: 'TraderJoeLeverageStrategyUSDC',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  TraderJoeLeverageStrategyWBTCe: {
    contract: 'TraderJoeLeverageStrategy',
    type: StrategyTypes.COMPOUND_LEVERAGE,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      aaveAddressProvider: Address.Aave.AddressProvider,
      receiptToken: Address.TraderJoe.jWBTC,
      strategyName: 'TraderJoeLeverageStrategyWBTCe',
    },
    config: { ...config }, // Shallow copy
    setup: { ...setup },
  },

  AlphaLendStrategyDAIe: {
    contract: 'AlphaLendAvalancheStrategy',
    type: StrategyTypes.ALPHA_LEND,
    constructorArgs: {
      swapper,
      receiptToken: Address.Alpha.ibDAIev2,
      strategyName: 'AlphaLendStrategyDAIe',
    },
    config: { ...config },
    setup: { ...setup },
  },

  AlphaLendStrategyWETHe: {
    contract: 'AlphaLendAvalancheStrategy',
    type: StrategyTypes.ALPHA_LEND,
    constructorArgs: {
      swapper,
      receiptToken: Address.Alpha.ibWETHev2,
      strategyName: 'AlphaLendStrategyWETHe',
    },
    config: { ...config },
    setup: { ...setup },
  },

  AlphaLendStrategyUSDCe: {
    contract: 'AlphaLendAvalancheStrategy',
    type: StrategyTypes.ALPHA_LEND,
    constructorArgs: {
      swapper,
      receiptToken: Address.Alpha.ibUSDCev2,
      strategyName: 'AlphaLendStrategyUSDCe',
    },
    config: { ...config },
    setup: { ...setup },
  },

  AlphaLendStrategyUSDC: {
    contract: 'AlphaLendAvalancheStrategy',
    type: StrategyTypes.ALPHA_LEND,
    constructorArgs: {
      swapper,
      receiptToken: Address.Alpha.ibUSDCv2,
      strategyName: 'AlphaLendStrategyUSDC',
    },
    config: { ...config },
    setup: { ...setup },
  },

  AlphaLendStrategyWBTCe: {
    contract: 'AlphaLendAvalancheStrategy',
    type: StrategyTypes.ALPHA_LEND,
    constructorArgs: {
      swapper,
      receiptToken: Address.Alpha.ibWBTCev2,
      strategyName: 'AlphaLendStrategyWBTCe',
    },
    config: { ...config },
    setup: { ...setup },
  },

  AlphaLendStrategyAVAX: {
    contract: 'AlphaLendAvalancheStrategyAVAX',
    type: StrategyTypes.ALPHA_LEND,
    constructorArgs: {
      swapper,
      receiptToken: Address.Alpha.ibAVAXv2,
      strategyName: 'AlphaLendStrategyAVAX',
    },
    config: { ...config },
    setup: { ...setup },
  },

  VesperBenqiXYStrategyWBTCe_WETHe: {
    contract: 'VesperBenqiXYStrategy',
    type: StrategyTypes.COMPOUND_VESPER_XY,
    constructorArgs: {
      swapper,
      comptroller: Address.Benqi.COMPTROLLER,
      rewardDistributor: Address.Benqi.REWARD_DISTRIBUTOR,
      rewardToken: Address.Benqi.QI,
      receiptToken: Address.Benqi.qiBTC,
      borrowCToken: Address.Benqi.qiETH,
      vPool: Address.Vesper.vaWETHe,
      vsp: Address.Vesper.VSP,
      strategyName: 'VesperBenqiXYStrategyWBTCe_WETHe',
    },
    config: { ...config },
    setup: { ...setup },
  },

  VesperTraderJoeXYStrategyAVAX_WETHe: {
    contract: 'VesperTraderJoeXYStrategy',
    type: StrategyTypes.COMPOUND_VESPER_XY,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      receiptToken: Address.TraderJoe.jAVAX,
      borrowCToken: Address.TraderJoe.jWETH,
      vPool: Address.Vesper.vaWETHe,
      vsp: Address.Vesper.VSP,
      strategyName: 'VesperTraderJoeXYStrategyAVAX_WETHe',
    },
    config: { ...config },
    setup: { ...setup },
  },
  VesperTraderJoeXYStrategyWBTCe_WETHe: {
    contract: 'VesperTraderJoeXYStrategy',
    type: StrategyTypes.COMPOUND_VESPER_XY,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      receiptToken: Address.TraderJoe.jWBTC,
      borrowCToken: Address.TraderJoe.jWETH,
      vPool: Address.Vesper.vaWETHe,
      vsp: Address.Vesper.VSP,
      strategyName: 'VesperTraderJoeXYStrategyWBTCe_WETHe',
    },
    config: { ...config },
    setup: { ...setup },
  },
  VesperTraderJoeXYStrategyWBTCe_USDCe: {
    contract: 'VesperTraderJoeXYStrategy',
    type: StrategyTypes.COMPOUND_VESPER_XY,
    constructorArgs: {
      swapper,
      comptroller: Address.TraderJoe.COMPTROLLER,
      rewardDistributor: Address.TraderJoe.REWARD_DISTRIBUTOR,
      rewardToken: Address.TraderJoe.JOE,
      receiptToken: Address.TraderJoe.jWBTC,
      borrowCToken: Address.TraderJoe.jUSDC,
      vPool: Address.Vesper.vaUSDCe,
      vsp: Address.Vesper.VSP,
      strategyName: 'VesperTraderJoeXYStrategyWBTCe_USDCe',
    },
    config: { ...config },
    setup: { ...setup },
  },
}

module.exports = Object.freeze(StrategyConfig)
