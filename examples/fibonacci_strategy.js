#!/usr/bin/env node

var backoff = require('../index');

var strategy = new backoff.FibonacciStrategy();

for (var i = 0; i < 10; i++) {
    console.log(strategy.next());
}
