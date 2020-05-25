const buildMakeReceipt = require('./receipt');
const receiptSchema = require('./receipt-schema');

const makeReceipt = buildMakeReceipt(receiptSchema);

module.exports = makeReceipt;
