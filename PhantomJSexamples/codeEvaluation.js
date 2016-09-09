var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
  console.log('Page title is ' + msg);
};

var url = 'http://www.google.com';

//TODO url as list, page loop open

page.open(url, function(status) {
  page.evaluate(function() {
    console.log(document.title);
  });
  phantom.exit();
});

