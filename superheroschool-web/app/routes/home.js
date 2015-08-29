var express = require('express');
var router = express.Router();
var TestController = require('../controllers/TestController');

module.exports = function(passport) {

/**
 *	/
 */
router.route('/')
	.get(function (req, resp, next) {
		resp.render('landing', {
			title: 'SuperHero School - Because You\'re Awesome'
		});
	});


/**
 *	/test
 */
router.route('/test')
	.get(function (req, resp, next) {
		TestController.test(null);
		
		resp.render('test', {
			title: 'SuperHero School - Because You\'re Awesome'
		});
	});

	return router;
}