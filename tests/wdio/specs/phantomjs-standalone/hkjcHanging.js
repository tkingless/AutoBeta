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

	describe('template tests start:', function() {

		before(function() {
			utility.mkdirSync(testSuiteBaseDir);
			wdioElementScreenshot.init(browser);
			return browser.url('http://bet.hkjc.com/football/odds/odds_inplay.aspx?ci=en-US');
		});

		beforeEach(function() {
			//this function runs before each it(), crazy
		});

		describe('"Holding for ten minustes', function() {

			it('min 0', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('0.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
					done();
				}, 60000);
			})

			it('min 1', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('1.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
					done();
				}, 60000);
			});

			it('min 2', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('2.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
					done();
				}, 60000);
			});

			it('min 3', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('3.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
					done();
				}, 60000);
			});

			it('min 4', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('4.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
					done();
				}, 60000);
			});

			it('min 5', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('5.min.png'));
			});

			it('wait 1 min', function(done) {
				setTimeout(function() {
					console.log('waiting over.');
					done();
				}, 60000);
			});

			it('min 6', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('6.min.png'));
			});

		});

	});

}