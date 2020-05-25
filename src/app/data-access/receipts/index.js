const Receipt = require('../../../database/models/Receipt');
const makeReceiptDb = require('./receipt-db');

const receiptDb = makeReceiptDb(Receipt);
module.exports = receiptDb;
