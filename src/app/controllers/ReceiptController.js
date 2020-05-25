const {
  addReceipt,
  getReceipt,
  removeReceipt,
  listReceipts,
} = require('../use-cases/receipts');

class ReceiptController {
  async getReceipt(req, res) {
    const { id } = req.params;
    try {
      const receipt = await getReceipt({
        id,
        user_id: req.userId,
      });

      return res.status(200).json(receipt);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error });
    }
  }

  async listReceipts(req, res) {
    const { category_id, date } = req.query;

    try {
      const receipts = await listReceipts({
        category_id,
        user_id: req.userId,
        date,
      });

      return res.status(200).json(receipts);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  }

  async createReceipt(req, res) {
    try {
      const receipt = await addReceipt({
        ...req.body,
        user_id: req.userId,
      });

      return res.status(201).json(receipt);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  }

  async deleteReceipt(req, res) {
    const { id } = req.params;

    try {
      await removeReceipt({
        id,
        user_id: req.userId,
      });

      return res.status(200).json({ message: 'Receipt successfully deleted.' });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  // async getReceiptsDailyReport(req, res) {
  //   const { date, dailySum = false } = req.query;

  //   const daily_sum = dailySum ? dailySum.toLowerCase() === 'true' : false;
  //   console.log(typeof daily_sum);

  //   if (daily_sum) {
  //     if (typeof date !== 'undefined') {
  //       const dailySumTotal = await Receipt.sum('value', {
  //         where: { user_id: req.userId, date },
  //       });

  //       const receiptsList = await Receipt.findAll({
  //         where: {
  //           date,
  //           user_id: req.userId,
  //         },
  //       });

  //       return res.status(200).json({
  //         saldoTotal: dailySumTotal,
  //         receiptsList,
  //       });
  //     }

  //     const dailySumTotal = await Receipt.sum('value', {
  //       where: { user_id: req.userId, date: new Date() },
  //     });

  //     const receiptsList = await Receipt.findAll({
  //       where: {
  //         user_id: req.userId,
  //       },
  //     });

  //     return res.status(200).json({
  //       saldoTotal: dailySumTotal,
  //       receiptsList,
  //     });
  //   }

  //   const allReceiptsSum = await Receipt.sum('value', {
  //     where: { user_id: req.userId },
  //   });

  //   if (typeof date !== 'undefined') {
  //     const receiptsList = await Receipt.findAll({
  //       where: {
  //         date,
  //         user_id: req.userId,
  //       },
  //     });

  //     return res.status(200).json({
  //       saldoTotal: allReceiptsSum,
  //       receiptsList,
  //     });
  //   }

  //   const receiptsList = await Receipt.findAll({
  //     where: {
  //       user_id: req.userId,
  //     },
  //   });

  //   return res.status(200).json({
  //     saldoTotal: allReceiptsSum,
  //     receiptsList,
  //   });
  // }
}

module.exports = new ReceiptController();
