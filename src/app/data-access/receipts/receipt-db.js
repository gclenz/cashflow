module.exports = function makeReceiptDb(makeDb) {
  async function findOne({ id, user_id }) {
    const result = await makeDb.findOne({
      where: { id, user_id },
    });
    return result;
  }
  async function findAll({
    user_id,
    category_id = undefined,
    date = undefined,
  }) {
    if (typeof category_id !== 'undefined') {
      const receipts = await makeDb.findAll({
        where: {
          category_id,
          user_id,
        },
      });

      return receipts;
    }

    if (typeof date !== 'undefined') {
      const receipts = await makeDb.findAll({
        where: {
          date,
          user_id,
        },
      });

      return receipts;
    }

    if (typeof category !== 'undefined' && typeof date !== 'undefined') {
      const receipts = await makeDb.findAll({
        where: {
          date,
          category_id,
          user_id,
        },
      });

      return receipts;
    }

    const receipts = await makeDb.findAll({
      where: {
        user_id,
      },
    });

    return receipts;
  }
  async function insert({ ...receiptInfo }) {
    const exists = await makeDb.findOne({
      where: {
        type: receiptInfo.type,
        date: receiptInfo.date,
        value: receiptInfo.value,
        user_id: receiptInfo.user_id,
      },
    });
    if (exists) {
      return exists;
    }
    const result = await makeDb.create({ ...receiptInfo });
    return result;
  }
  async function remove({ id, user_id }) {
    const result = await makeDb.destroy({
      where: { id, user_id },
    });
    return result;
  }
  return Object.freeze({
    findOne,
    findAll,
    insert,
    remove,
  });
};
