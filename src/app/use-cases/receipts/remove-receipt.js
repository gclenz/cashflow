module.exports = function makeRemoveReceipt({ receiptDb }) {
  function receiptNotFound() {
    return {
      message: 'Receipt not found.',
    };
  }

  async function deleteReceipt(receipt) {
    await receiptDb.remove(receipt);
    return {
      message: 'Receipt deleted.',
    };
  }

  return async function removeReceipt({ id } = {}) {
    if (!id) {
      throw new Error('You must supply a receipt id.');
    }

    const receiptToDelete = await receiptDb.findById({ id });

    if (!receiptToDelete) {
      return receiptNotFound();
    }

    return deleteReceipt(receiptToDelete);
  };
};
