module.exports = function makeRemoveUser({ userDb }) {
  function userNotFound() {
    return {
      message: 'User not found.',
    };
  }

  async function deleteUser(user) {
    await userDb.remove(user);
    return {
      message: 'User deleted.',
    };
  }

  return async function removeUser({ id } = {}) {
    if (!id) {
      throw new Error('You must supply an user id.');
    }

    const userToDelete = await userDb.findById({ id });

    if (!userToDelete) {
      return userNotFound();
    }

    return deleteUser(userToDelete);
  };
};
