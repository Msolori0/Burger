var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var router = require('./controllers/burger_controllers.js');
app.use('/', router);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
