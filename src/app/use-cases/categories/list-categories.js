module.exports = function makeListCategories({ categoryDb }) {
  return async function listCategories() {
    const receipts = await categoryDb.findAll();
    return receipts;
  };
};
