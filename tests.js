var assert = require("assert");
var cx = require('./classSet');

describe('cx', function() {
  it('keeps object keys with truthy values', function() {
    assert.equal(cx({
      a: true,
      b: false,
      c: 0,
      d: null,
      e: undefined,
      f: 1,
    }), 'a f');
  });

  it('joins arrays of class names, excluding null values', function() {
    assert.equal(cx('a', 0, null, undefined, 'b'), 'a 0 b');
  });

  it('returns an empty string for an empty configuration', function() {
    assert.equal(cx({}), '');
  });
});
