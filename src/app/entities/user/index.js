const bcrypt = require('bcrypt');
const buildMakeUser = require('./user');
const userSchema = require('./user-schema');

function hash(password) {
  return bcrypt.hashSync(password, 8);
}

const makeUser = buildMakeUser(userSchema, hash);

module.exports = makeUser;
