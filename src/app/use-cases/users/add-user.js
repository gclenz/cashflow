const makeUser = require('../../entities/user');

module.exports = function makeAddUser({ userDb }) {
  return async function addUser(userInfo) {
    const user = makeUser(userInfo);
    return userDb.insert({
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
    });
  };
};
