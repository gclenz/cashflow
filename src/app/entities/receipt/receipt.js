module.exports = function buildMakeReceipt(schema) {
  return ({ type, category_id, date, description, value, user_id } = {}) => {
    schema({ type, category_id, date, description, value });

    function checkIfValueIsCorrect() {
      const valueSign = Math.sign(Number(value));

      if (type === 'in' && valueSign === -1) {
        return false;
      }

      if (type === 'out' && valueSign === 1) {
        return false;
      }

      return true;
    }

    function checkIfUserExists(id) {
      return true;
    }

    function checkIfCategoryExists(id) {
      return true;
    }

    const userExists = checkIfUserExists(user_id);
    const categoryExists = checkIfCategoryExists(user_id);
    const valueHasRightSign = checkIfValueIsCorrect();

    if (!userExists) throw new Error('User not found.');
    if (!categoryExists) throw new Error('Category not found.');
    if (!valueHasRightSign)
      throw new Error(
        'An in receipt must have a positive value and an out receipt must have a negative value.'
      );

    return Object.freeze({
      getType: () => type,
      getCategoryId: () => category_id,
      getDate: () => date,
      getDescription: () => description,
      getValue: () => value,
      getUserId: () => user_id,
    });
  };
};
