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
  async function summary({ date = undefined, dailySum = false, user_id }) {
    const daily_sum = dailySum ? dailySum.toLowerCase() === 'true' : false;

    if (daily_sum) {
      if (typeof date !== 'undefined') {
        const dailySumTotal = await makeDb.sum('value', {
          where: { user_id, date },
        });

        const receiptsList = await makeDb.findAll({
          where: {
            date,
            user_id,
          },
        });

        return {
          saldoTotal: dailySumTotal,
          receiptsList,
        };
      }

      const dailySumTotal = await makeDb.sum('value', {
        where: { user_id, date: new Date() },
      });

      const receiptsList = await makeDb.findAll({
        where: {
          user_id,
        },
      });

      return {
        saldoTotal: dailySumTotal,
        receiptsList,
      };
    }

    const allReceiptsSum = await makeDb.sum('value', {
      where: { user_id },
    });

    if (typeof date !== 'undefined') {
      const receiptsList = await makeDb.findAll({
        where: {
          date,
          user_id,
        },
      });

      return {
        saldoTotal: allReceiptsSum,
        receiptsList,
      };
    }

    const receiptsList = await makeDb.findAll({
      where: {
        user_id,
      },
    });

    return {
      saldoTotal: allReceiptsSum,
      receiptsList,
    };
  }
  return Object.freeze({
    findOne,
    findAll,
    insert,
    remove,
    summary,
  });
};
