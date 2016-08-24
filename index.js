'use strict';

const chai = require('chai');

module.exports = {
  expect: expect,
  assert: function () { return new Error('implement me'); },
  should: function () { return new Error('implement me'); }
};

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
