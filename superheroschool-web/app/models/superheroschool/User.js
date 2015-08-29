var mongoose = require('mongoose');
var utils = require('../utils/Utils');

function User(_args, _cb) {
	if (!(this instanceof User)) {
		throw new TypeError("User constructor cannot be called as a function.");
	}

	UserEntity.call(this, _args, _cb);
}

module.exports = User;

var UserEntity = require('./entities/UserEntity');

User.inheritsFrom(UserEntity);
