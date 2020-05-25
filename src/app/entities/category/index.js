const buildMakeCategory = require('./category');
const categorySchema = require('./category-schema');

const makeCategory = buildMakeCategory(categorySchema);

module.exports = makeCategory;
