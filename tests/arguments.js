'use strict';

var cx = require('./../classSet.js');
var test = require('tape');
var T = true;
var F = false;

test('should strip out boolean values', function(t){
  t.plan(1);

  t.equal(cx('foo', T && 'foo--true', F && 'foo--false'), 'foo foo--true');
});

test('should strip out null values', function(t){
  t.plan(1);

  t.equal(cx('foo', null), 'foo');
});

test('should strip out undefined values', function(t){
  t.plan(1);

  t.equal(cx('foo', undefined), 'foo');
});

test('should strip out NaN values', function(t){
  t.plan(1);

  t.equal(cx('foo', NaN), 'foo');
});

test('should strip out empty values', function(t){
  t.plan(1);

  t.equal(cx('foo', ''), 'foo');
});

test('should keep intact a falsy integer value', function(t){
  t.plan(1);

  t.equal(cx('foo', 0), 'foo 0');
});
