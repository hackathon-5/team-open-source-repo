var express = require('express');
var config = require('./config/config');
var glob = require('glob');
var mongodb = require('./app/models/db/Mongodb');

var models = glob.sync(config.root + '/app/models/superheroschool/*.js');
models.forEach(function(model) {
  require(model);
});
var app = express();

require('./config/express')(app, config);

app.listen(process.env['PORT'] || config.port);

