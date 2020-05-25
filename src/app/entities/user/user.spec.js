const makeUser = require('.');

function makeFakeUser(overrides) {
  const user = {
    name: 'Gabriel',
    email: 'gabriel@lenz.com',
    password: 'gabriel',
  };

  return {
    ...user,
    ...overrides,
  };
}

describe('user', () => {
  it('must have a name', () => {
    const user = makeFakeUser({ name: null });
    expect(() => makeUser(user)).toThrow('User must have a name.');
  });

  it('must have a email', () => {
    const user = makeFakeUser({ email: null });
    expect(() => makeUser(user)).toThrow('User must have a email.');
  });
  it('must have password', () => {
    const user = makeFakeUser({ password: null });
    expect(() => makeUser(user)).toThrow('User must have a password.');
  });
});
