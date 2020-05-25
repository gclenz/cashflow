module.exports = function makeListReceipts({ receiptDb }) {
  return async function listReceipts({ ...receiptInfo }) {
    const receipts = await receiptDb.findAll(receiptInfo);
    return receipts;
  };
};
