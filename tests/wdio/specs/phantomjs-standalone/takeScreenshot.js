'use strict'
const
	chai = require('chai'),
	fs = require('fs'),
	assert = chai.assert,
	utility = require('../../utility');

chai.should();

module.exports = () => {

	var testSuiteBaseDir = testOutputBaseDir.concat('noChaiAsPromise/');

	describe('Take Screenshot tests start:', function() {

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

		describe('Take screenshot', function() {

			it('Transfer promises, taking screenshot on google', function(done) {
				browser.saveScreenshot(testSuiteBaseDir.concat('google.defaultSize.png'));
				done();
			});

			it('Set viewPortSize and taking another screenshot', function(done) {

				var desiredSize = {
					width: 1024,
					height: 768
				};

				browser.setViewportSize(desiredSize).then(function() {
					browser.getViewportSize().then(function(size) {

						var screenshot = browser.saveScreenshot().then(function(data) {
							return fs.writeFileSync(testSuiteBaseDir.concat('google.1024.768.png', data));
						})
						done();
					})
				});
			});

			it('Get viewPortSize', function() {
				//chai as promised style, ***with function(done) event
				/*browser.getViewportSize().should.eventually.equal({
					width: 1024,
					height: 768
				}).notify(done);*/
				browser.getViewportSize().then(function(value) {
					value.should.equal({
						width: 1024,
						height: 768
					})
				});
			});

		});

	});

}