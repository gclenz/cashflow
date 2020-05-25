const makeReceipt = require('.');

function makeFakeReceipt(overrides) {
  const receipt = {
    type: 'in',
    category_id: 1,
    date: '2020-05-25',
    description: 'Awesome description.',
    value: 297.99,
    user_id: 1,
  };

  return {
    ...receipt,
    ...overrides,
  };
}

describe('receipt', () => {
  it('must have a type', () => {
    const receipt = makeFakeReceipt({ type: null });
    expect(() => makeReceipt(receipt)).toThrow('Receipt must have a type.');
  });

  it('must have a valid category id', () => {
    const receipt = makeFakeReceipt({ category_id: null });
    expect(() => makeReceipt(receipt)).toThrow(
      'Receipt must have a category id.'
    );
  });
  it('must have valid date', () => {
    const receipt = makeFakeReceipt({ date: null });
    expect(() => makeReceipt(receipt)).toThrow('Receipt must have a date.');
  });
  it('must have valid value', () => {
    const receipt = makeFakeReceipt({ value: null });
    expect(() => makeReceipt(receipt)).toThrow('Receipt must have a value.');
  });
  it('must have valid user id', () => {
    const receipt = makeFakeReceipt({ user_id: null });
    expect(() => makeReceipt(receipt)).toThrow('Receipt must have a user id.');
  });
  it('can have an null description', () => {
    const noId = makeFakeReceipt({ description: null });
    expect(() => makeReceipt(noId)).not.toThrow();
  });
});
