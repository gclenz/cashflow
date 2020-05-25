module.exports = function buildMakeReceipt(schema) {
  return ({ type, category_id, date, description, value, user_id } = {}) => {
    schema({ type, category_id, date, description, value });

    function checkIfUserExists(id) {
      return true;
    }

    function checkIfCategoryExists(id) {
      return true;
    }

    const userExists = checkIfUserExists(user_id);
    const categoryExists = checkIfCategoryExists(user_id);

    if (!userExists) throw new Error('User not found.');
    if (!categoryExists) throw new Error('Category not found.');

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
