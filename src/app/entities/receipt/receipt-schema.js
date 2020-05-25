const Yup = require('yup');

const types = ['in', 'out'];

module.exports = async (receipt) => {
  try {
    const schema = Yup.object().shape({
      type: Yup.string().oneOf(types).required('Receipt must have a type.'),
      category_id: Yup.number()
        .integer()
        .positive()
        .required('Receipt must have a category_id.'),
      date: Yup.date().required('Receipt must have a date.'),
      description: Yup.string(),
      value: Yup.number().required('Receipt must have a value.'),
    });

    return await schema.validate(receipt, { abortEarly: false });
  } catch (err) {
    throw new Error({ error: 'Validation failed.', err });
  }
};
