'use strict'
const
	chai = require('chai'),
	fs = require('fs'),
	assert = chai.assert,
	utility = require('../../../utility');

chai.should();

module.exports = () => {

	var testSuiteBaseDir = testOutputBaseDir.concat('noChaiAsPromise/');

	describe('Webdriverio Protocol basic functionalities', function() {

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

		describe('Website navigation', function() {

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
		describe('Website navigation 2', function() {

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

		describe('Google page search webdriverio', function() {

			it('Get source and write as .html', function() {
				return browser.getSource().then(function(source) {
					fs.writeFileSync(testSuiteBaseDir.concat('google.html'), source);
					browser.saveScreenshot(testSuiteBaseDir.concat('googleSearch.png'));
				});
			})

			//css selector tutorial: http://www.testingexcellence.com/css-selectors-selenium-webdriver-tutorial/
			it('Async() get text attr', function() {
				return browser
					.getText('div[id$=_eEe]').then(function(value) {
						console.log("            ".concat(value));
					})
			})

			var keywordToSearch = 'github';
			it("Set search field text and click btn", function() {
				return browser.setValue('input[class$=lst]', keywordToSearch).getValue('input[class$=lst]').then(function(value) {
					value.should.equal(keywordToSearch);
					browser.saveScreenshot(testSuiteBaseDir.concat('googleFieldInput.png'));
					return browser.click('input[class$=lsb]').then(function() {
						return browser.saveScreenshot(testSuiteBaseDir.concat('googleFieldSearched.png'));
					})

				})
			})

		})

	});

}