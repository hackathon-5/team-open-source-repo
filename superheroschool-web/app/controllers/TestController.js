var mongoose = require('mongoose');
var User = require('../models/superheroschool/User');

function TestController(args, cb) {

}

TestController.test = function(data) {
	// Drop Collections
	User.drop(function() {});
}

module.exports = TestController;