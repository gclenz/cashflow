const Yup = require('yup');

module.exports = async (category) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    return await schema.validate(category, { abortEarly: false });
  } catch (err) {
    throw new Error({ error: 'Validation failed.', err });
  }
};
