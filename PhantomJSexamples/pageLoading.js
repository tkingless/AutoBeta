var httpPage = require('webpage').create();
httpPage.open('http://edx.eduhk.hk', function(status) {
	console.log("Status: " + status);
	if (status === "success") {
		//TODO this is not working
		//httpPage.render('/static/images/logo.7eec09d43a49.png');
	}
	phantom.exit();
});