module.exports = function makeGetReceipt({ receiptsDb }) {
  return async function getReceipt({ receiptInfo } = {}) {
    console.log(receiptInfo);
    const receipt = await receiptsDb.findOne(receiptInfo);
    return receipt;
  };
};
