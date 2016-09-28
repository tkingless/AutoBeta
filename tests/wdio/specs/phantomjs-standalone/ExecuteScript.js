'use strict'
const
	chai = require('chai'),
	fs = require('fs'),
	assert = chai.assert,
	utility = require('../../utility');

chai.should();

module.exports = () => {

	var testSuiteBaseDir = testOutputBaseDir.concat('ExecuteScript/');

	describe('template tests start:', function() {

		before(function() {
			utility.mkdirSync(testSuiteBaseDir);
			return browser.url('http://www.google.com').then(function() {
				return browser.getUrl().then(function(url) {
					url.should.to.contain("http://www.google.com");
				});
			});
		});

		beforeEach(function() {
			//this function runs before each it(), crazy
		});

		describe('Basic Executing functions', function() {

			it('dummy ', function() {
				//TODO something you want
				browser.execute(function(a, b, c, d) {
					// browser context - you may not access client or console
					return a + b + c + d;
				}, 1, 2, 3, 4).then(function(ret) {
					// node.js context - client and console are available
					console.log(ret.value); // outputs: 10
				});
			});

		});

	});

}