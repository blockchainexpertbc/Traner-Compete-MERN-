const mongoose = require('mongoose');

const UserSchema = require.main.require('./app/models/user');
const UserDetail = require.main.require('./app/models/userDetail');

const dbConfig = require('./db.config');

const db = mongoose.connect(`mongodb://${dbConfig.host}/${dbConfig.name}`, dbConfig.opts);

mongoose.connection.on('connected', () => {

  console.log('mongodb connection is successed!')

});

mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error: '))

module.exports = db;