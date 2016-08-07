var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.sendFile('/var/www/chat/public/index.html');
});

app.use(express.static('dist'));

app.listen(3333);