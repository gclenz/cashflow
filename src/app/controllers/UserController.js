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
      console.log(error);
      return res.status(400).json({ error });
    }
  }

  async deleteUser(req, res) {
    try {
      await removeUser({ id: req.userId });

      return res.status(200).json({ message: 'User successfully deleted.' });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  }
}

module.exports = new UserController();
