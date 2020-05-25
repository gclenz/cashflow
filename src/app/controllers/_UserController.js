const Yup = require('yup');
const User = require('../models/User');

class UserController {
  async createUser(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { name, email } = await User.create(req.body);

    return res.status(201).json({
      name,
      email,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'Email already in use.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match. ' });
    }

    await user.update(req.body);

    const updatedUser = await User.findByPk(req.userId);

    return res.status(200).json({
      name: updatedUser.name,
      email: updatedUser.email,
    });
  }

  async delete(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    await user.destroy();

    return res.status(200).json({ message: 'User successfully deleted.' });
  }
}

module.exports = new UserController();
