var page = require('webpage').create();
page.open('http://edx.eduhk.hk', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('/static/images/logo.7eec09d43a49.png');
  }
  phantom.exit();
});

