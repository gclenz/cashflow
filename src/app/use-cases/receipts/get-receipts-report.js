module.exports = function makeGetReceiptsReport({ receiptDb }) {
  return async function getReceiptsReport({ ...receiptInfo }) {
    const report = await receiptDb.summary(receiptInfo);
    return report;
  };
};
