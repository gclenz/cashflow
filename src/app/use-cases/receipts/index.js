const makeAddReceipt = require('./add-receipt');
const MakeListReceipts = require('./list-receipts');
const makeGetReceipt = require('./get-receipt');
const makeRemoveReceipt = require('./remove-receipt');
const receiptDb = require('../../data-access/receipts');

const addReceipt = makeAddReceipt({ receiptDb });
const listReceipts = MakeListReceipts({ receiptDb });
const getReceipt = makeGetReceipt({ receiptDb });
const removeReceipt = makeRemoveReceipt({ receiptDb });

const receiptService = Object.freeze({
  addReceipt,
  listReceipts,
  getReceipt,
  removeReceipt,
});

module.exports = receiptService;
module.exports = { addReceipt, listReceipts, getReceipt, removeReceipt };
