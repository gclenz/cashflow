const Yup = require('yup');

module.exports = async (user) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
    });

    return await schema.validate(user, { abortEarly: false });
  } catch (error) {
    throw new Error({ error: 'Validation failed.', messages: error.inner });
  }
};
