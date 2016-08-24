'use strict';

const chai = require('chai');

module.exports = {
  /** @type {Function} */
  expect: expect,
  /** @type {Function} */
  assert: function () { return new Error('implement me'); },
  /** @type {Function} */
  should: function () { return new Error('implement me'); }
};

/**
 * Execute an expectation against a value with an optional comparison value.
 * @param {*} value to test.
 * @param {string} expectation chain to be executed by chai.expect.
 * @param {*} expectedValue to compare against actual value.
 * @returns {Object|boolean} assertion error object or true.
 */
function expect(value, expectation, expectedValue) {
  let expected = chai.expect(value);
  const chain = expectation.split('.');

  let i = 0;
  const limit = chain.length - 1;
  for (i; i < limit; i++) {
    expected =  expected[chain[i]];
    if (expected === undefined) {
      return new Error(`property ${chain[i]} does not exist in ${expectation}`);
    }
  }

  try {
    if (expectedValue) {
      expectedValue = Array.isArray(expectedValue) ? expectedValue : [expectedValue];
      expected[chain[i]].apply(expected[chain[i - 1]], expectedValue);
    } else {
      expected[chain[i]];
    }
  } catch (error) {
    return error;
  }

  return true;
}
