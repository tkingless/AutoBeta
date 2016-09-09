var httpPage = require('webpage').create();
httpPage.open('http://edx.eduhk.hk', function(status) {
	console.log("Status: " + status);
	if (status === "success") {
		httpPage.render('screenshotCaptured.png');
	}
	//phantom.exit();
});

//node_modules/phantomjs/bin/phantomjs --ssl-protocol=any PhantomJSexamples/pageLoading.js

var httpsPage = require('webpage').create();
httpsPage.open('https://hk.yahoo.com/', function(status) {
	console.log("Status: " + status);
	if (status === "success") {
		httpsPage.render('screenshotCapturedHttps.png');
	}
	phantom.exit();
});