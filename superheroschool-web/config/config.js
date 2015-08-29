var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'demo'
    },
    port: 3000,
    db: 'mongodb://localhost:27017/superheroschool'
  },

  test: {
    root: rootPath,
    app: {
      name: 'demo'
    },
    port: 3000,
    db: 'mongodb://localhost:27017/superheroschool'
  },

  production: {
    root: rootPath,
    app: {
      name: 'demo'
    },
    port: 3000,
    db: 'mongodb://localhost:27017/superheroschool'
  }
};

module.exports = config[env];
