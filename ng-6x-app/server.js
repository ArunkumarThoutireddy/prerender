var PRN = require('prerender-node');
var express = require('express');
var app = express();

app.use(PRN
    .set('prerenderServiceUrl', 'http://localhost:3000')
    .set('forwardHeaders', true));

app.use(express.static('dist'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('dist/index.html', { root: __dirname });
});
app.get('/', function(req, res) {
    res.sendFile('./dist/index.html');
});


app.listen(3002, function() {
    console.log("listening on port 3002");
});