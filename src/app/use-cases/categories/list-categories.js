module.exports = function makeListCategories({ categoryDb }) {
  return async function listCategories({ ...categoryInfo }) {
    const receipts = await categoryDb.findAll(categoryInfo);
    return receipts;
  };
};
