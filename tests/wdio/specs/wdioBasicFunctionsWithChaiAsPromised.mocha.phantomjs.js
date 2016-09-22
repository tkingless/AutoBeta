'use strict'
const
	fs = require('fs'),
	chai = require('chai'),
	chaiAsPromised = require('chai-as-promised'),
	assert = chai.assert;

chai.use(chaiAsPromised);
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
			chaiAsPromised.transferPromiseness = browser.transferPromiseness;
			return browser.url('http://www.google.com');
		});

		describe('Take screenshot', function() {

			//all it()s are run in series, with only mocha done() callback is called , jump to next it(), if no done event passed to it(), the
			//it() will just go straight away not waiting async function to fisnish, so add done() to when asyn function is completed.

			it('Transfer promises, taking screenshot on google', function(done) {

				mkdirSync('./tests/wdio/wdioBasicFunctions/');
				browser.saveScreenshot('./tests/wdio/wdioBasicFunctions/google.defaultSize.png');
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
							return fs.writeFileSync('./tests/wdio/wdioBasicFunctions/google.1024.768.png', data);
						})
						done(); //you may try putting this done() on the last line if this it()
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
						browser.saveScreenshot('./tests/wdio/wdioBasicFunctions/exampleDotCom.png');
						//TOFIX
						//assert.equal(url,"http://examplde.com/"); //wrong assert can stuck program...?!!
						url.should.equal("http://example.com/");
						done();
					})

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