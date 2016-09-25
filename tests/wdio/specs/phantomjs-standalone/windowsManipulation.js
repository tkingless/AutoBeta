'use strict'
const
	chai = require('chai'),
	fs = require('fs'),
	assert = chai.assert,
	utility = require('../../utility');

chai.should();

module.exports = () => {

	var testSuiteBaseDir = testOutputBaseDir.concat('noChaiAsPromise/');

	describe('Windows tests start:', function() {

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

		describe('Basic Windows functions', function() {

			it('Get current windows handles', function() {
				return browser.windowHandles().then(function(windowHdls) {
					var windows = windowHdls.value;

					//ref: http://www.w3schools.com/js/js_arrays.asp
					//console.log(windows);
					//console.log(windows[0]);
					windows.length.should.equal(1);
					Array.isArray(windows).should.equal(true);
					browser.saveScreenshot(testSuiteBaseDir.concat('first.windows.png'));
				})
			});

			it('Create new window', function() {
				return browser.newWindow('http://webdriver.io', 'WebdriverIO window', 'width=420,height=230,resizable,scrollbars=yes,status=1').then(function() {
					return browser.windowHandles().then(function(windowHdls) {
						var windows = windowHdls.value;
						windows.length.should.equal(2);
						Array.isArray(windows).should.equal(true);
						browser.saveScreenshot(testSuiteBaseDir.concat('second.windows.png'));
					})
				})

			})
		});

		describe('Deal with windows pop up website', function() {

		})

	});

}