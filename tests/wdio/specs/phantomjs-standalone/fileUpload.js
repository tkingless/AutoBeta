'use strict'
const
	chai = require('chai'),
	fs = require('fs'),
	assert = chai.assert,
	utility = require('../../utility');

var wdioElementScreenshot = require('wdio-element-screenshot');

chai.should();

module.exports = () => {

	var testSuiteBaseDir = testOutputBaseDir.concat('FileUploading/');

	describe('file uploading tests start:', function() {

		var fileName = 'uploadTestFile.jpg';
		var fileToUpload = '';

		before(function() {
			utility.mkdirSync(testSuiteBaseDir);
			wdioElementScreenshot.init(browser);
			return browser.url('http://the-internet.herokuapp.com/upload');
		});

		beforeEach(function() {
			//this function runs before each it(), crazy
		});

		describe('"FileUploading functions', function() {

			it('Take first screenshot', function() {
				browser.saveScreenshot(testSuiteBaseDir.concat('1.first.png'));
			});

		});

	});

}