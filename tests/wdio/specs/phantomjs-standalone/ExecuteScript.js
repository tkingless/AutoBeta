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
					console.log("inside browser console log"); //Note: i.e. this line of output is not to terminal
					return a + b + c + d;
				}, 1, 2, 3, 4).then(function(ret) {
					// node.js context - client and console are available
					console.log("dummy: " + ret.value); // outputs: 10
				});
			});

			/*it('calling phatomjs by injecting snippet', () => {
				browser.execute(function(){
					console.log("tkingkwun");
					var page = require('webpage').create();
					return "tsangkk";
				}).then(function(returned){
					console.log(returned.value);
				})
			})*/

			it('async execute() ', function(done) {
				browser.timeoutsAsyncScript(5000)
					.executeAsync(function(a, b, c, d, done) {
						setTimeout(function() {
							done(a + b + c + d);
						}, 3000);
					}, 1, 2, 3, 4).then(function(ret) {
						console.log("Async: " + ret.value);
						done();
					})
			})

		});

		//http://stackoverflow.com/questions/17755526/using-phantomjs-with-selenium-webdriver-and-python

	});

}