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

		it('Transfer promises, taking screenshot on google', function() {
			//var screenshot = browser.saveScreenshot();
			//fs.writeFileSync('./myShort.png', screenshot);
			browser.saveScreenshot('./tests/wdio/wdioBasicFunctions/snapshot.png');
		});

	});

}


//TODO make this function as utility
function mkdirSync (path) {
  try {
    fs.mkdirSync(path);
  } catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
  }
}