module.exports = function buildMakeUser(schema, hash) {
  return ({ name, email, password } = {}) => {
    schema({ name, email, password });

    function hashPassword() {
      return hash(password);
    }

    return Object.freeze({
      getName: () => name,
      getEmail: () => email,
      getPassword: () => hashPassword(),
    });
  };
};
