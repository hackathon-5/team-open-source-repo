var express = require('express');
var router = express.Router();

var User = require('../models/superheroschool/User');

module.exports = function() {

/**
 *	/api/v1/project
 */
router.route('/project')
	.post(function (req, resp, next) {

	});

	return router;
}