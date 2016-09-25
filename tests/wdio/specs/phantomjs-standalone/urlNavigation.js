'use strict'
const
	chai = require('chai'),
	fs = require('fs'),
	assert = chai.assert,
	utility = require('../../utility');

chai.should();

module.exports = () => {

	var testSuiteBaseDir = testOutputBaseDir.concat('noChaiAsPromise/');

	describe('urlNavigation tests start:', function() {

		//all it()s are run in series, with only mocha done() callback is called , jump to next it(), if no done event passed to it(), the
		//it() will just go straight away not waiting async function to fisnish, so add done() to when asyn function is completed.

		before(function() {
			utility.mkdirSync(testSuiteBaseDir);
		});

		beforeEach(function() {
			return browser.url('http://www.google.com').then(function() {
				return browser.getUrl().then(function(url) {
					url.should.to.contain("http://www.google.com");
				});
			});
		});

		describe('Website navigation with done callback style', function() {

			it('Go to example.com', function(done) {
				browser.url('http://example.com').then(function() {

					browser.getUrl().then(function(url) {
						browser.saveScreenshot(testSuiteBaseDir.concat('exampleDotCom.png'));
						try {
							url.should.not.equal("http://exaample.com/");
							done()
						} catch (e) {
							done(e);
						}
					})
				});
			});
		});

		//Use this example to illustrate async and sync function again
		describe('Website navigation without done sytle test case', function() {

			it('Go to callbackhell.com', function() {
				console.log('		runtime 1');
				return browser.url('http://callbackhell.com').then(function() {
					console.log('		runtime 2');
					return browser.getUrl().then(function(url) {
						console.log('		runtime 3');
						url.should.equal("http://callbackhell.com/");
						console.log('		runtime 4');
						browser.saveScreenshot(testSuiteBaseDir.concat('callbackhell.png'));
						console.log('		runtime 5');
					});

				});
				console.log('runtime 6');
				return browser.getUrl().then(function(url) {
					console.log('runtime 7');
					console.log(url);
					console.log('runtime 8');
				});
				console.log('runtime 9');
			});
		});
	});

}