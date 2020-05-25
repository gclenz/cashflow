const Yup = require('yup');
const Receipt = require('../models/Receipt');

class ReceiptController {
  async getReceipt(req, res) {
    const { id } = req.params;

    const receipt = await Receipt.findOne({
      where: {
        id,
        user_id: req.userId,
      },
    });

    if (!receipt) {
      return res.status(404).json({ error: 'Receipt not found.' });
    }

    return res.status(200).json(receipt);
  }

  async listReceipts(req, res) {
    const { userId } = req;
    const { category, date } = req.query;

    if (typeof category !== 'undefined') {
      const receipts = await Receipt.findAll({
        where: {
          category,
          user_id: userId,
        },
      });

      return res.status(200).json(receipts);
    }

    if (typeof date !== 'undefined') {
      const receipts = await Receipt.findAll({
        where: {
          date,
          user_id: userId,
        },
      });

      return res.status(200).json(receipts);
    }

    if (typeof category !== 'undefined' && typeof date !== 'undefined') {
      const receipts = await Receipt.findAll({
        where: {
          date,
          category,
          user_id: userId,
        },
      });

      return res.status(200).json(receipts);
    }

    const receipts = await Receipt.findAll({
      where: {
        user_id: userId,
      },
    });

    return res.status(200).json(receipts);
  }

  async createReceipt(req, res) {
    const schema = Yup.object().shape({
      type: Yup.string().oneOf(['in', 'out']).required(),
      category: Yup.string().required(),
      date: Yup.date().required(),
      description: Yup.string(),
      value: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const receipt = await Receipt.create({
      ...req.body,
      user_id: req.userId,
    });

    return res.status(201).json(receipt);
  }

  async updateReceipt(req, res) {
    const { id } = req.params;

    const schema = Yup.object().shape({
      category: Yup.string(),
      date: Yup.date(),
      description: Yup.string(),
      type: Yup.string().oneOf(['in', 'out']),
      value: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const receipt = await Receipt.findOne({
      where: {
        id,
        user_id: req.userId,
      },
    });

    if (!receipt) {
      return res.status(404).json({ error: 'Receipt not found.' });
    }

    const updatedData = Object.assign(receipt.toJSON(), req.body);

    await receipt.update(updatedData);

    return res.status(200).json(receipt);
  }

  async deleteReceipt(req, res) {
    const { id } = req.params;

    const receipt = await Receipt.findOne({
      where: {
        id,
        user_id: req.userId,
      },
    });

    if (!receipt) {
      return res.status(404).json({ error: 'Receipt not found.' });
    }

    await receipt.destroy();

    return res.status(200).json({ message: 'Receipt successfully deleted.' });
  }

  async getReceiptsDailyReport(req, res) {
    const { date, dailySum = false } = req.query;

    const daily_sum = dailySum ? dailySum.toLowerCase() === 'true' : false;
    console.log(typeof daily_sum);

    if (daily_sum) {
      if (typeof date !== 'undefined') {
        const dailySumTotal = await Receipt.sum('value', {
          where: { user_id: req.userId, date },
        });

        const receiptsList = await Receipt.findAll({
          where: {
            date,
            user_id: req.userId,
          },
        });

        return res.status(200).json({
          saldoTotal: dailySumTotal,
          receiptsList,
        });
      }

      const dailySumTotal = await Receipt.sum('value', {
        where: { user_id: req.userId, date: new Date() },
      });

      const receiptsList = await Receipt.findAll({
        where: {
          user_id: req.userId,
        },
      });

      return res.status(200).json({
        saldoTotal: dailySumTotal,
        receiptsList,
      });
    }

    const allReceiptsSum = await Receipt.sum('value', {
      where: { user_id: req.userId },
    });

    if (typeof date !== 'undefined') {
      const receiptsList = await Receipt.findAll({
        where: {
          date,
          user_id: req.userId,
        },
      });

      return res.status(200).json({
        saldoTotal: allReceiptsSum,
        receiptsList,
      });
    }

    const receiptsList = await Receipt.findAll({
      where: {
        user_id: req.userId,
      },
    });

    return res.status(200).json({
      saldoTotal: allReceiptsSum,
      receiptsList,
    });
  }
}

module.exports = new ReceiptController();
