var express = require('express');
var app = express();


//app.use('/dist', express.static('client/'));
app.use(express.static('client'));


app.listen(8000);

app.get('/', function (req,res) {
  res.sendFile('index.html');
});

app.get('/test', function (req, res) {
  res.send('Hello World!');
});


app.post('/save', function (req, res) {
    res.send('saved!');
    var fs = require('fs');
    var filename = 'page.json';
    fs.writeFile(filename, req.toString(), function (err) {
      if (err) return console.log(err);
        console.log('failed write page.json');
    });
});

/*var page = require('webpage').create();
page.open('http://localhost:8079/', function() {
    page.render('test.pdf');
    phantom.exit();
});
var phantom = require('phantom');

phantom.create(function (ph) {
  ph.createPage(function (page) {
    page.open("http://www.google.com", function (status) {
      console.log("opened google? ", status);
      page.evaluate(function () { return document.title; }, function (result) {
        console.log('Page title is ' + result);
        ph.exit();
      });
    });
    page.render('google.html');
  });
});*/
