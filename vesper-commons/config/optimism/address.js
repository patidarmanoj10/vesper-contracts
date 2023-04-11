'use strict'
const Address = {
  DAI: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  WETH: '0x4200000000000000000000000000000000000006',
  NATIVE_TOKEN: '0x4200000000000000000000000000000000000006', // WETH
  OP: '0x4200000000000000000000000000000000000042',
  SUSD: '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9',
  USDC: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
  USDT: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
  MultiCall: '0x80Ae459D058436ecB4e043ac48cfd209B578CBF0',
  Aave: {
    AddressProvider: '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb',
    AAVE: '0x76FB31fb4af56892A25e32cFC43De717950c9278',
    aOptOP: '0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf',
    aOptWETH: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
    aOptUSDC: '0x625E7708f30cA75bfd92586e17077590C60eb4cD',
  },
  Curve: {
    CRV: '0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53',
    SETH_ETH_POOL: '0x7Bc5728BC2b59B45a58d9A576E2Ffc5f0505B35E',
    SUSD_POOL: '0x061b87122Ed14b9526A813209C8a59a633257bAb',
    FACTORY_METAPOOL_DEPOSIT_ZAP: '0x167e42a1c7ab4be03764a2222aac57f5f6754411',
  },
  MultiSig: {
    safe: '0x0000000000000000000000000000000000000000',
  },
  Vesper: {
    DEPLOYER: '0x1cbfae0367a9b1e4ac2c158e57b5f00ccb337271',
    FEE_COLLECTOR: '0x1cbfae0367a9b1e4ac2c158e57b5f00ccb337271', // Same as deployer
    KEEPER: '0x76d266DFD3754f090488ae12F6Bd115cD7E77eBD', // Bot address
    JCV: '0x1CbfaE0367a9B1e4Ac2c158E57B5F00cCb337271', // JCV Keeper
    MP: '0xdf826ff6518e609E4cEE86299d40611C148099d5', // MP Keeper
    Swapper: '0xDAf982c67712780D54C298A91D86788165B701A4',
    MasterOracle: '0x0aac835162D368F246dc71628AfcD6d2930c47d3',
    vaUSDC: '0x539505Dde2B9771dEBE0898a84441c5E7fDF6BC0',
  },
}

module.exports = Object.freeze(Address)
