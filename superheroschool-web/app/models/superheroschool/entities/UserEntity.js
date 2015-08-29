var mongoose = require('mongoose');
var crypto = require('crypto');

function UserEntity(_args, _cb) {
	var _this = this;
	this._exists = false;
	this._dirty = false;
	this._atomic = false;
	this._m = new (mongoose.model('User'))();

	if(typeof(_args) !== 'undefined' && typeof(_cb) !== 'undefined' && typeof(_cb) === 'function') {
		var objId = null;
		if(typeof(_args) === 'string') {
			objId = new mongoose.Types.ObjectId(_args);
		} else if(typeof(_args) === 'object' && (_args instanceof mongoose.Types.ObjectId)) {
			objId = _args;
		}
		UserEntity._model.findById(objId, function(_err, _doc) {
			for(key in _doc) {
				_this._m[key] = _doc[key];
			}
			_this._exists = true;
			_cb(_err);
		});
	}

};

module.exports = UserEntity;

var User = require('../User');

UserEntity.prototype.instantiate = function(_doc) {
	if(_doc) {
		for(key in _doc) {
			this._m[key] = _doc[key];
		}
		this._exists = true;
	}
};

UserEntity.prototype.insert = function(_cb) {
	if(!this._exists && typeof(UserEntity._model) !== 'undefined') {
		var _this = this;
		this._m.save(function(_err, _doc) {
			if(!_err) {
				_this._exists = true;
			}
			_cb(_err);
		});
	}
};

UserEntity.prototype.update = function(_cb) {
	if(this._exists && this._dirty && typeof(UserEntity._model) !== 'undefined') {
		var _this = this;
		this._m.save(function(_err, _doc) {
			if(!_err) {
				_this._dirty = false;
			}
			if(typeof(_cb) === 'function') {;
				_cb(_err);
			};
		});
	}
};

UserEntity.prototype.getId = function() {
	return this._m['_id'];
};

UserEntity.prototype.getEmail = function() {
	return this._m['email'];
};

UserEntity.prototype.getPassword = function() {
	return this._m['password'];
};

UserEntity.prototype.getFirstName = function() {
	return this._m['first_name'];
};

UserEntity.prototype.getLastName = function() {
	return this._m['last_name'];
};

UserEntity.prototype.getStripeId = function() {
	return this._m['stripe_id'];
};

UserEntity.prototype.getOwnedProjectIds = function() {
	return this._m['owned_projects'];
};

UserEntity.prototype.getOwnedProjects = function(_cb) {
	Project._model.find({ 'owning_user': this._m['_id'] }, function(_err, _docs) {
		if(!_err) {
			var projects = new Array();
			for(var i=0; i<_docs.length; i++) {
				var project = new Project();
				project.instantiate(_docs[i]);
				projects.push(project.obj());
			}
			_cb(_err, projects);
		} else {
			_cb(_err, null);
		}
	});
};

UserEntity.prototype.getNumberOfOwnedProjects = function(_cb) {
	Project._model.count({ 'owning_user': this._m['_id'] }, function(_err, _cnt) {
		_cb(_err, _cnt);
	});
};

UserEntity.prototype.getAssignedPublicKeyIds = function() {
	return this._m['assigned_public_keys'];
};

UserEntity.prototype.getAssignedPublicKeys = function(_cb) {
	PublicKey._model.find({ 'owning_user': this._m['_id'] }, function(_err, _docs) {
		if(!_err) {
			var public_keys = new Array();
			for(var i=0; i<_docs.length; i++) {
				var public_key = new PublicKey();
				public_key.instantiate(_docs[i]);
				public_keys.push(public_key.obj());
			}
			_cb(_err, public_keys);
		} else {
			_cb(_err, null);
		}
	});
};

UserEntity.prototype.getNumberOfAssignedPublicKeys = function(_cb) {
	Project._model.count({ 'owning_user': this._m['_id'] }, function(_err, _cnt) {
		_cb(_err, _cnt);
	});
};

UserEntity.prototype.setId = function(_id) {
	if(typeof(_id) === 'string' || (typeof(_id) === 'object' && (_id instanceof mongoose.Types.ObjectId))) {
		this._m['_id'] = _id;
		this._dirty = true;
	}
};

UserEntity.prototype.setEmail = function(email) {
	if(typeof(email) === 'string' && email.length >= 7 && email.length <= 120 && /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/igm.test(email)) {
		this._m['email'] = email;
		this._dirty = true;
	}
};

UserEntity.prototype.setPassword = function(password) {
	if(typeof(password) === 'string' && password.length >= 5 && password.length <= 20) {
		var hash = crypto.createHash('sha512');
		hash.update(password);
		this._m['password'] = hash.digest('hex');
		this._dirty = true;
	}
};

UserEntity.prototype.setFirstName = function(first_name) {
	if(typeof(first_name) === 'string' && first_name.length >= 2 && first_name.length <= 30) {
		this._m['first_name'] = first_name;
		this._dirty = true;
	}
};

UserEntity.prototype.setLastName = function(last_name) {
	if(typeof(last_name) === 'string' && last_name.length >= 2 && last_name.length <= 30) {
		this._m['last_name'] = last_name;
		this._dirty = true;
	}
};

UserEntity.prototype.setStripeId = function(stripe_id) {
	if(typeof(stripe_id) === 'string' && stripe_id.length >= 10 && stripe_id.length <= 30) {
		this._m['stripe_id'] = stripe_id;
		this._dirty = true;
	}
};

UserEntity.prototype.addOwnedProject = function(owned_project, _cb) {
	if(owned_project !== null && typeof(owned_project) !== 'undefined' && (owned_project instanceof Project) && owned_project.exists() && (owned_project.getId() instanceof mongoose.Types.ObjectId)) {
		this._m['owned_projects'].push(owned_project.getId());
		this._dirty = true;

		var _this = this;
		if(this._exists && !this._atomic) {
			this.update(function(_err) {
				if(_err) { _cb(_err); }
				owned_project.atomic(true);
				owned_project.setOwningUser(_this);
				owned_project.update(function(_err) {
					_cb(_err);
				});
			});
		}
	}
};

UserEntity.prototype.addAssignedPublicKey = function(assigned_public_key, _cb) {
	if(assigned_public_key !== null && typeof(assigned_public_key) !== 'undefined' && (assigned_public_key instanceof PublicKey) && assigned_public_key.exists() && (assigned_public_key.getId() instanceof mongoose.Types.ObjectId)) {
		this._m['assigned_public_keys'].push(assigned_public_key.getId());
		this._dirty = true;

		var _this = this;
		if(this._exists && !this._atomic) {
			this.update(function(_err) {
				if(_err) { _cb(_err); }
				assigned_public_key.atomic(true);
				assigned_public_key.setOwningUser(_this);
				assigned_public_key.update(function(_err) {
					_cb(_err);
				});
			});
		}
	}
};

UserEntity.prototype.remove = function(_cb) {
	
	this._m.remove(function(_err) {
		_cb(_err);
	});

};

UserEntity.prototype.exists = function() {
	return this._exists;
};

UserEntity.prototype.dirty = function() {
	return this._dirty;
};

UserEntity.prototype.dirty = function(_dirty) {
	this._dirty = _dirty;
};

UserEntity.prototype.atomic = function() {
	return this._atomic;
};

UserEntity.prototype.atomic = function(_atomic) {
	this._atomic = _atomic;
};

UserEntity.prototype.json = function() {
	if(this._exists) {
		var obj = this._m.toObject();
		obj.id = obj._id;
		delete obj.__v;
		delete obj._id;
		return JSON.stringify(obj);
	}
};

UserEntity.prototype.obj = function() {
	if(this._exists) {
		var obj = this._m.toObject();
		obj.id = obj._id;
		delete obj.__v;
		delete obj._id;
		return obj;
	}
};

UserEntity._collection = 'user';

UserEntity._schema = mongoose.Schema({
	email : { type : String, required : true, unique : true },
	password : { type : String, required : true },
	first_name : { type : String },
	last_name : { type : String },
	stripe_id : { type : String, unique : true, sparse: true },
	owned_projects : [ { type : mongoose.Schema.Types.ObjectId, ref : 'Project' } ],
	assigned_public_keys : [ { type : mongoose.Schema.Types.ObjectId, ref : 'PublicKey' } ]
}, { collection : UserEntity._collection });

UserEntity._model = mongoose.model('User', UserEntity._schema);

UserEntity.drop = function(_cb) {
	mongoose.connection.collections[UserEntity._collection].drop(function(_err) {
		_cb(_err)
	});
};

UserEntity.emailExists = function(email, _cb) {
	UserEntity._model.find({email: email}, function(_err, _docs) {
		if(!_err && _docs.length == 1) {
			_cb(_err, true);
		} else {
			_cb(_err, false);
		}
	});
};

UserEntity.getUserByEmail = function(email, _cb) {
	UserEntity._model.findOne({email: email}, function(_err, _doc) {
		if(!_err) {
			var user = new User();
			user.instantiate(_doc);
			_cb(_err, user);
		}
	});
};
