var express = require('express')
    , app = express()
    , controller = require(__dirname + '/controller');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/pages');

app.use(express.static(__dirname + '/pages'));



app.get('/', controller.home);

app.get('/about', controller.about);


module.exports = app;