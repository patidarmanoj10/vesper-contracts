'use strict'

const testRunner = require('../../../utils/testRunner')

describe('VADAI Pool', function () {
  testRunner('VADAI', ['Compound_Leverage_DAI'], [{ debtRatio: 9000 }])
})
