'use strict'

//This is dedication from https://github.com/cognitom/webdriverio-examples/

/** Capabilities (browsers) */
const capabilities = [{
	browserName: 'phantomjs',
	version: '2.1.1'
}]

module.exports = capabilities.map(c => ({
	desiredCapabilities: c
}))