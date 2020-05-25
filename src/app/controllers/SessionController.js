const jwt = require('jsonwebtoken');
const Yup = require('yup');

const authConfig = require('../../config/auth');
const User = require('../../database/models/User');

class SessionController {
  async createSession(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid email and/or password.' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: 'Invalid email and/or password.' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Invalid email and/or password.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        name,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();
