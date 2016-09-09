var httpPage = require('webpage').create();
httpPage.open('http://edx.eduhk.hk', function(status) {
	console.log("Status: " + status);
	if (status === "success") {
		httpPage.render('screenshotCaptured.png');
	}
	phantom.exit();
});