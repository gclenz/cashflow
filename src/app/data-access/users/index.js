const User = require('../../../database/models/User');
const makeUserDb = require('./user-db');

const userDb = makeUserDb(User);
module.exports = userDb;
