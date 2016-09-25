'use strict'
const
	fs = require('fs')

var utility = () => {
	this.mkdirSync = function(path) {
		try {
			fs.mkdirSync(path);
		} catch (e) {
			if (e.code != 'EEXIST') throw e;
		}
	}
}

module.exports = utility;