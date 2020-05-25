module.exports = function buildMakeCategory() {
  return ({ name } = {}) => {
    if (!name) throw new Error('Category must have a name.');

    return Object.freeze({
      getName: () => name,
    });
  };
};
