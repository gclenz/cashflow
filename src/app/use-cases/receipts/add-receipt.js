const makeReceipt = require('../../entities/receipt');

module.exports = function makeAddReceipt({ receiptDb }) {
  return async function addReceipt(receiptInfo) {
    const receipt = makeReceipt(receiptInfo);
    return receiptDb.insert({
      type: receipt.getType(),
      category_id: receipt.getCategoryId(),
      date: receipt.getDate(),
      description: receipt.getDescription(),
      value: receipt.getValue(),
      user_id: receipt.getUserId(),
    });
  };
};
