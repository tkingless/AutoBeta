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

			var firstWin;
			it('Get current windows handles', function() {
				return browser.windowHandles().then(function(windowHdls) {
					var windows = windowHdls.value;

					//ref: http://www.w3schools.com/js/js_arrays.asp
					//console.log(windows);
					windows.length.should.equal(1);
					Array.isArray(windows).should.equal(true);
					browser.saveScreenshot(testSuiteBaseDir.concat('1.first.windows.png'));
					firstWin = windows[0];
				})
			});

			it('Create new window', function() {
				//TOCHECK: For phantomjs standalone, newWindow(url), url input not working, still need to use url
				return browser.newWindow('http://whatever.com.you.input.is.useless').getUrl().then(function(url) {
						url.should.equal('about:blank');
					}).url('http://example.com')
					.then(function() {
						return browser.windowHandles().then(function(windowHdls) {
							var windows = windowHdls.value;
							windows.length.should.equal(2);
							browser.saveScreenshot(testSuiteBaseDir.concat('2.second.windows.exampleDotCom.png'));
						})
					})

			})

			it('Switching back to first Windows', function(){
				return browser.switchTab(firstWin).then(() => {
					browser.saveScreenshot(testSuiteBaseDir.concat('3.backTo.firstWin.png'));
				});
			})

		});

		describe('Deal with windows pop up website', function() {

		})

	});

}