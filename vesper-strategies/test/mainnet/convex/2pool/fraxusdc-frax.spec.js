'use strict'

const testRunner = require('../../../utils/testRunner')

describe('VAFRAX Pool', function () {
  testRunner('VAFRAX', ['Convex_fraxusdc_FRAX'], [{ debtRatio: 10000 }])
})
