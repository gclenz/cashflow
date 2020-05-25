const Category = require('../../../database/models/Category');
const makeCategoryDb = require('./category-db');

const categoryDb = makeCategoryDb(Category);
module.exports = categoryDb;
