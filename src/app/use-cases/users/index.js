const makeAddUser = require('./add-user');
const makeRemoveUser = require('./remove-user');
const userDb = require('../../data-access/users');

const addUser = makeAddUser({ userDb });
const removeUser = makeRemoveUser({ userDb });

const userService = Object.freeze({
  addUser,
  removeUser,
});

module.exports = userService;
module.exports = { addUser, removeUser };
