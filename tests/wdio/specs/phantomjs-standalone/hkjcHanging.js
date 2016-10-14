'use strict'
const
	chai = require('chai'),
	fs = require('fs'),
	assert = chai.assert,
	utility = require('../../utility');

var wdioElementScreenshot = require('wdio-element-screenshot');

chai.should();

module.exports = () => {

	var testSuiteBaseDir = testOutputBaseDir.concat('hkjcHanging/');

	describe('HKJC tests start:', function() {

		before(function() {
			utility.mkdirSync(testSuiteBaseDir);
			wdioElementScreenshot.init(browser);
			return browser.url('http://bet.hkjc.com/football/odds/odds_inplay.aspx?ci=en-US');
		});

		beforeEach(function() {
			//this function runs before each it(), crazy
		});

		describe('"Holding for 15 minustes, result: the auto refresh function works', function() {

			it('min 0', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('0.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			})

			it('min 1', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('1.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 2', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('2.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 3', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('3.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 4', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('4.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 5', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('5.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 6', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('6.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 7', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('7.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 8', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('8.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 9', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('9.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 10', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('10.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 11, click refresh', function() {
				return browser.click('a[class$=refresh]').then(() => {
					browser.saveScreenshot(testSuiteBaseDir.concat('11.min.refresh.png'));
				})
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 12, click refresh', function() {
				return browser.click('a[class$=refresh]').then(() => {
					browser.saveScreenshot(testSuiteBaseDir.concat('12.min.refresh.png'));
				})
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 13, click refresh', function() {
				return browser.click('a[class$=refresh]').then(() => {
					browser.saveScreenshot(testSuiteBaseDir.concat('13.min.refresh.png'));
				})
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 14, click refresh', function() {
				return browser.click('a[class$=refresh]').then(() => {
					browser.saveScreenshot(testSuiteBaseDir.concat('14.min.refresh.png'));
				})
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 15, click refresh', function() {
				return browser.click('a[class$=refresh]').then(() => {
					browser.saveScreenshot(testSuiteBaseDir.concat('15.min.refresh.png'));
				})
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
				}, 60000);
				done();
			});

			it('min 16, click refresh', function() {
				return browser.click('a[class$=refresh]').then(() => {
					browser.saveScreenshot(testSuiteBaseDir.concat('16.min.refresh.png'));
				})
			});

		});

	});

}