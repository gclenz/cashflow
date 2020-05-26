module.exports = function makeUserDb(makeDb) {
  async function findById({ id }) {
    const result = await makeDb.findByPk(id);
    return result;
  }
  async function findOne({ email }) {
    const result = await makeDb.findOne({
      where: { email },
    });
    return result;
  }
  async function insert({ ...userInfo }) {
    const { email } = userInfo;
    const exists = await makeDb.findOne({
      where: { email },
    });
    if (exists) {
      throw new Error({ error: 'User already exists.' });
    }
    const result = await makeDb.create({ ...userInfo });
    return result;
  }
  async function update({ id, ...userInfo }) {
    const result = await makeDb.update(...userInfo, {
      where: { id },
    });
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
