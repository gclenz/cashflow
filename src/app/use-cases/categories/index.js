const makeAddCategory = require('./add-category');
const makeRemoveCategory = require('./remove-category');
const categoryDb = require('../../data-access/categories');

const addCategory = makeAddCategory({ categoryDb });
const removeCategory = makeRemoveCategory({ categoryDb });

const userService = Object.freeze({
  addCategory,
  removeCategory,
});

module.exports = userService;
module.exports = { addCategory, removeCategory };
