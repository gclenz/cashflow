module.exports = function buildMakeCategory(schema) {
  return ({ name } = {}) => {
    schema({ name });

    return Object.freeze({
      getName: () => name,
    });
  };
};
