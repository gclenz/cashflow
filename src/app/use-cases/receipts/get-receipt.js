module.exports = function makeGetReceipt({ receiptDb }) {
  return async function getReceipt({ ...receiptInfo }) {
    const receipt = await receiptDb.findOne(receiptInfo);
    return receipt;
  };
};
