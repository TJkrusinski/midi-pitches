'use strict';

var midi = require('./');
var assert = require('assert');

describe('midi()', function(){
  it('finds the correct pitch for a midi note', function(){
    // good enough for me
    assert.equal(midi(69), 440);
    assert.equal(midi(68).toFixed(2), 415.30);
    assert.equal(midi(21).toFixed(2), 27.50);
  });
});

