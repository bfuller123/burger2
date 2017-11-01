const express = require('express');
const app = express();
const mo = require('method-override');
const bp = require('body-parser');
const path = require('path');
const router = require('./controllers/burgers_controllers.js');
const exphandlebars = require("express-handlebars");

//so it can handle post methods as json and url endcoded
app.use(bp.json()); // support json encoded bodies
app.use(bp.urlencoded({ extended: true }));

//serving static files
app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3000;
app.use('/', router); //knows how to handle URLs extensions from router
app.use('/add', router);
app.use('/update', router);
app.listen(PORT);
