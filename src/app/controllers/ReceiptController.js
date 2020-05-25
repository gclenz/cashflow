const {
  addReceipt,
  getReceipt,
  removeReceipt,
  listReceipts,
  getReceiptsReport,
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
      return res.status(404).json({ error: 'Failed to get receipt.' });
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
      return res.status(400).json({ error: 'Failed to get receipts.' });
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
      return res.status(400).json({ error: 'Failed to create receipt.' });
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

  async getReceiptsDailyReport(req, res) {
    const { date, dailySum = false } = req.query;

    try {
      const report = await getReceiptsReport({
        date,
        dailySum,
        user_id: req.userId,
      });

      return res.status(200).json(report);
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Receipts' report could not be generated." });
    }
  }
}

module.exports = new ReceiptController();
