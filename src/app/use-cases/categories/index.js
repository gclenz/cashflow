const makeAddCategory = require('./add-category');
const makeRemoveCategory = require('./remove-category');
const makeListCategoires = require('./list-categories');
const categoryDb = require('../../data-access/categories');

const addCategory = makeAddCategory({ categoryDb });
const removeCategory = makeRemoveCategory({ categoryDb });
const listCategories = makeListCategoires({ categoryDb });

const userService = Object.freeze({
  addCategory,
  removeCategory,
  listCategories,
});

module.exports = userService;
module.exports = { addCategory, removeCategory, listCategories };
