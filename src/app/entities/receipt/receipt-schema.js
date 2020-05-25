const Yup = require('yup');

const types = ['in', 'out'];

module.exports = async (receipt) => {
  try {
    const schema = Yup.object().shape({
      type: Yup.string().oneOf(types).required(),
      category_id: Yup.number().integer().positive().required(),
      date: Yup.date().required(),
      description: Yup.string(),
      value: Yup.number().required(),
    });

    const isPositiveValue = Math.sign(Number(receipt.value));

    if (receipt.type === 'in' && isPositiveValue === -1) {
      throw new Error({ error: 'An in receipt must have a positive value' });
    }

    if (receipt.type === 'out' && isPositiveValue === 1) {
      throw new Error({ error: 'An out receipt must have a negative value' });
    }

    return await schema.validate(receipt, { abortEarly: false });
  } catch (err) {
    throw new Error({ error: 'Validation failed.', err });
  }
};
