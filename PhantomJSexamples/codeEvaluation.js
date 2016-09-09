var page = require('webpage').create();

//define callbacks
page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};
page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
  console.log('Receive ' + JSON.stringify(response, undefined, 4));
};

var url = 'http://www.google.com';
page.settings.userAgent = '"Mozilla/5.0';

//TODO url as list, page loop open

page.open(url, function(status) {
  page.evaluate(function() {
    console.log(document.title);
  });
  phantom.exit();
});

