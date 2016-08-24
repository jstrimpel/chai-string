const should = require('../index').should;
const assert = require('../index').assert;
const expect = require('../index').expect;
var chai = require('chai');

describe('index.js', function () {
  it('should call chai expect without values', function () {
    var fail = expect([], 'not.to.be.empty');
    var pass = expect([1], 'not.to.be.empty');

    chai.expect(fail.message).to.equal('expected [] not to be empty');
    chai.expect(pass).to.be.true;
  });

  it('should call chai expect with value', function () {
    var fail = expect(1, 'to.be.equal', 2);
    var pass = expect(1, 'to.be.equal', 1);

    chai.expect(fail.message).to.equal('expected 1 to equal 2');
    chai.expect(pass).to.be.true;
  });

  it('should call chai expect with values', function () {
    var fail = expect({ bar: 1 }, 'to.have.all.keys', ['bar', 'baz']);
    var pass = expect({ bar: 1, baz: 2 }, 'to.have.all.keys', ['bar', 'baz']);

    chai.expect(fail.message).to.equal('expected { bar: 1 } to have keys \'bar\', and \'baz\'');
    chai.expect(pass).to.be.true;
  });

  it('should return error if property does not exist in chain', function () {
    var fail = expect({ bar: 1 }, 'to.have.flubber.keys', ['bar', 'baz']);

    chai.expect(fail.message).to.equal('property flubber does not exist in to.have.flubber.keys');
  });

  it('should throw error if function is not implemented', function () {
    var shouldFail = should();
    var assertFail = assert();

    chai.expect(shouldFail.message).to.equal('implement me');
    chai.expect(assertFail.message).to.equal('implement me');
  });
});
