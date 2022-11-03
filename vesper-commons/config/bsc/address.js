'use strict'

const Address = {
  ZERO: '0x0000000000000000000000000000000000000000',
  BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  MultiCall: '0xcA11bde05977b3631167028862bE2a173976CA11',
  WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  NATIVE_TOKEN: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  Alpaca: {
    ibBNB: '0xd7D069493685A581d27824Fc46EdA46B7EfC0063',
    ibBUSD: '0x7C9e73d4C71dae564d41F78d56439bB4ba87592f',
  },
  DotDot: {
    DDD: '0x84c97300a190676a19D1E13115629A11f8482Bd1',
    LpDepositor: '0x8189F0afdBf8fE6a9e13c69bA35528ac6abeB1af',
  },
  Ellipsis: {
    AddressProvider: '0x31D236483A15F9B9dD60b36D4013D75e9dbF852b',
    EPX: '0xAf41054C1487b0e5E2B9250C0332eCBCe6CE9d71',
    LpStaking: '0x5B74C99AA2356B4eAa7B85dC486843eDff8Dfdbe',
    VAL_3EPS: '0x19EC9e3F7B21dd27598E7ad5aAe7dC0Db00A806d',
  },
  Stargate: {
    STG: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b',
    router: '0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8',
    lpStaking: '0x3052A0F6ab15b4AE1df39962d5DdEFacA86DaB47',
  },
  Venus: {
    Unitroller: '0xfD36E2c2a6789Db23113685031d7F16329158384',
    vBNB: '0xA07c5b74C9B40447a954e1466938b865b6BBea36',
    vBUSD: '0x95c78222B3D6e262426483D42CfA53685A67Ab9D',
    XVS: '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
  },
  Vesper: {
    DEPLOYER: '0x1CbfaE0367a9B1e4Ac2c158E57B5F00cCb337271',
    FEE_COLLECTOR: '0x1CbfaE0367a9B1e4Ac2c158E57B5F00cCb337271', // Deployer EOA
    KEEPER: '0x1CbfaE0367a9B1e4Ac2c158E57B5F00cCb337271', // Deployer EOA
    MasterOracle: '0x5323F445A8665239222b117aE095423a238F5706',
    Swapper: '0x6c27484d5f0386cA226bd4672Df4CA6430407883',
  },
  MultiSig: {
    safe: '0x0000000000000000000000000000000000000000', // Added to support deployment script.
  },
}

module.exports = Object.freeze(Address)
