'use strict'
const assert = require('assert'),
	fs = require('fs'),
	chai = require('chai'),
	chaiAsPromised = require('chai-as-promised')

chai.Should();
chai.use(chaiAsPromised);

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

	describe('Webdriverio basic functionalities', function() {

		before(function() {
			chaiAsPromised.transferPromiseness = browser.transferPromiseness;
			mkdirSync('./tests/wdio/wdioBasicFunctions/');
			return browser.url('http://www.google.com');
		});

		describe('Take screenshot', function() {

			//all it()s are run in series, with only mocha done() callback is called , jump to next it(), if no done event passed to it(), the
			//it() will just go straight away not waiting async function to fisnish, so add done() to when asyn function is completed.

			it('Transfer promises, taking screenshot on google', function(done) {

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
							console.log('browser save 1024 768 png');
							return fs.writeFileSync('./tests/wdio/wdioBasicFunctions/google.1024.768.png', data);
						})
						done(); //you may try putting this done() on the last line if this it()

					})
				});

			});

			it('Get viewPortSize', function(done) {
				browser.getViewportSize().then(function(size) {
					console.log(size) // outputs: {width: 1024, height: 768}
					done();
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