const makeCategory = require('../../entities/category');

module.exports = function makeAddCategory({ categoryDb }) {
  return async function addCategory(categoryInfo) {
    const category = makeCategory(categoryInfo);
    return categoryDb.insert({
      name: category.getName(),
    });
  };
};
