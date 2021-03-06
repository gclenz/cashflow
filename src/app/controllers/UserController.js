const { addUser, removeUser } = require('../use-cases/users');

class UserController {
  async createUser(req, res) {
    try {
      const { name, email } = await addUser(req.body);

      return res.status(201).json({
        name,
        email,
      });
    } catch (error) {
      return res.status(400).json({ error: 'Failed to create user.' });
    }
  }

  async deleteUser(req, res) {
    try {
      await removeUser({ id: req.userId });

      return res.status(200).json({ message: 'User successfully deleted.' });
    } catch (error) {
      return res.status(400).json({ error: 'Failed to delete user.' });
    }
  }
}

module.exports = new UserController();
