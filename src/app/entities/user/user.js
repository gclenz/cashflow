module.exports = function buildMakeUser(schema, hash) {
  return ({ name, email, password } = {}) => {
    schema({ name, email, password });

    if (!name) {
      throw new Error('User must have a name.');
    }
    if (!email) {
      throw new Error('User must have a email.');
    }
    if (!password) {
      throw new Error('User must have a password.');
    }

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
