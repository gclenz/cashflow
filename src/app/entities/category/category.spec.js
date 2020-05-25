const makeCategory = require('.');

function makeFakeCategory(overrides) {
  const category = {
    name: 'Gabriel',
  };

  return {
    ...category,
    ...overrides,
  };
}

describe('category', () => {
  it('must have a name', () => {
    const category = makeFakeCategory({ name: null });
    expect(() => makeCategory(category)).toThrow('Category must have a name.');
  });
});
