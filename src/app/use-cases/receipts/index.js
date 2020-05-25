const makeAddReceipt = require('./add-receipt');
const MakeListReceipts = require('./list-receipts');
const makeGetReceipt = require('./get-receipt');
const makeRemoveReceipt = require('./remove-receipt');
const makeGetReceiptsReport = require('./get-receipts-report');
const receiptDb = require('../../data-access/receipts');

const addReceipt = makeAddReceipt({ receiptDb });
const listReceipts = MakeListReceipts({ receiptDb });
const getReceipt = makeGetReceipt({ receiptDb });
const removeReceipt = makeRemoveReceipt({ receiptDb });
const getReceiptsReport = makeGetReceiptsReport({ receiptDb });

const receiptService = Object.freeze({
  addReceipt,
  listReceipts,
  getReceipt,
  removeReceipt,
  getReceiptsReport,
});

module.exports = receiptService;
module.exports = {
  addReceipt,
  listReceipts,
  getReceipt,
  removeReceipt,
  getReceiptsReport,
};
