'use strict'
const assert = require('assert')

module.exports = () => {

	describe('Demo Test Group', () => {
		it('gets the title of MDN toppage', () => {
			browser
				.url('https://developer.mozilla.org/en-US/')
				.getTitle().then(title => {
					assert.equal(title, 'Mozilla Developer Network')
				})
		})
	})

}