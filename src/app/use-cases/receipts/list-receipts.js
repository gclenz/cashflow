module.exports = function makeListReceipts(receiptsDb) {
  return async function listReceipts({ receiptInfo } = {}) {
    console.log(receiptsDb);
    const receipts = await receiptsDb.findAll(receiptInfo);
    return receipts;
  };
};
