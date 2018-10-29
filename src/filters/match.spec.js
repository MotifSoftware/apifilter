const match = require('./match');

test('match() passes through if URL does not match', (done) => {
  const middleware = match('/abc');

  middleware('/def', done);
});

test('match() passes through if URL matches and no parameters exist', (done) => {
  const middleware = match('/abc', {});

  middleware('/abc', done);
});

test('match() fails if a query parameter doesn\'t match its condition', () => {
  const middleware = match('/abc', {
    name: (param) => param === 'joe',
  });

  middleware('/abc?name=jonathan', (err, result) => {
    expect(err).toEqual('\'name\' failed validation');
  });
});

