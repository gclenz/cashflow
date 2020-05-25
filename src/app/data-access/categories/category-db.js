module.exports = function makeCategoryDb(makeDb) {
  async function findById({ id }) {
    const result = await makeDb.findByPk(id);
    return result;
  }
  async function findOne({ ...categoryInfo }) {
    const result = await makeDb.findOne({
      where: { name: categoryInfo.name },
    });
    return result;
  }
  async function insert({ ...categoryInfo }) {
    const exists = await makeDb.findOne({
      where: {
        name: categoryInfo.name,
      },
    });
    if (exists) {
      return exists;
    }
    const result = await makeDb.create({ ...categoryInfo });
    return result;
  }
  async function remove({ id }) {
    const result = await makeDb.destroy({
      where: { id },
    });
    return result;
  }
  return Object.freeze({
    findById,
    findOne,
    insert,
    remove,
  });
};
