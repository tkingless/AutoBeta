'use strict'
const
	chai = require('chai'),
	fs = require('fs'),
	assert = chai.assert,
	utility = require('../../utility');

chai.should();

module.exports = () => {

	var testSuiteBaseDir = testOutputBaseDir.concat('ButtonAndField/');

	describe('Button and Textfield tests start:', function() {

		//all it()s are run in series, with only mocha done() callback is called , jump to next it(), if no done event passed to it(), the
		//it() will just go straight away not waiting async function to fisnish, so add done() to when asyn function is completed.

		before(function() {
			utility.mkdirSync(testSuiteBaseDir);
			return browser.url('http://www.google.com').then(function() {
				return browser.getUrl().then(function(url) {
					url.should.to.contain("http://www.google.com");
				});
			});
		});

		beforeEach(function() {

		});

		var keywordToSearch = 'github';
		describe('Google page search keyword: '.concat(keywordToSearch), function() {

			it('Get source and write as .html', function() {
				return browser.getSource().then(function(source) {
					fs.writeFileSync(testSuiteBaseDir.concat('google.html'), source);
					browser.saveScreenshot(testSuiteBaseDir.concat('1.googleSearch.png'));
				});
			})

			//css selector tutorial: http://www.testingexcellence.com/css-selectors-selenium-webdriver-tutorial/
			it('Async() get text attr', function() {
				return browser
					.getText('div[id$=_eEe]').then(function(value) {
						console.log("            ".concat(value));
					})
			})

			it("Set search field text and click btn", function() {
				return browser.setValue('input[class$=lst]', keywordToSearch).getValue('input[class$=lst]').then(function(value) {
					value.should.equal(keywordToSearch);
					browser.saveScreenshot(testSuiteBaseDir.concat('2.googleFieldInput.png'));
					return browser.click('input[class$=lsb]').then(function() {
						return browser.saveScreenshot(testSuiteBaseDir.concat('3.googleFieldSearched.png'));
					})

				})
			})

		})

	});

}