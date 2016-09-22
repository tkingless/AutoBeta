'use strict'
const
	fs = require('fs'),
	chai = require('chai'),
	assert = chai.assert;

chai.should();

module.exports = () => {

	//not synchronous
	/*describe('Webdriverio basic functionalities', () => {
		it('Take screenshot on www.google.com', () => {
			browser
				.url('http://www.google.com').then(function() {

				})
			var screenshot = browser.saveScreenshot();
			fs.writeFileSync('./myShort.png', screenshot);
			browser.saveScreenshot('./snapshot.png');
		})
	})*/

	describe('Webdriverio Protocol basic functionalities', function() {

		before(function() {
			return browser.url('http://www.google.com');
		});

		describe('Take screenshot', function() {

			it('Transfer promises, taking screenshot on google', function(done) {

				mkdirSync('./tests/wdio/wdioBasicFunctions/noChaiAsPromise/');
				browser.saveScreenshot('./tests/wdio/wdioBasicFunctions/noChaiAsPromise/google.defaultSize.png');
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
							return fs.writeFileSync('./tests/wdio/wdioBasicFunctions/noChaiAsPromise/google.1024.768.png', data);
						})
						done();
					})
				});
			});

			it('Get viewPortSize', function(done) {
				browser.getViewportSize().should.eventually.deep.equal({
					width: 1024,
					height: 768
				}).notify(done);
			});
		});

		describe('Website navigation', function() {

			it('Go to example.com', function(done) {
				browser.url('http://example.com').then(function() {

					browser.getUrl().then(function(url) {
						browser.saveScreenshot('./tests/wdio/wdioBasicFunctions/noChaiAsPromise/exampleDotCom.png');
						try {
							url.should.equal("http://example.com/");
							done()
						} catch (e) {
							done(e);
						}
					})
				});
			});
		});

		describe('Website navigation 2', function() {

			it('Go to example.com', function() {
				return browser.url('http://example.com');
				return browser.getUrl().then(function(url) {
					console.log(url);
				});
			});
		});

	});

}


//TODO export this function to utility
function mkdirSync(path) {
	try {
		fs.mkdirSync(path);
	} catch (e) {
		if (e.code != 'EEXIST') throw e;
	}
}