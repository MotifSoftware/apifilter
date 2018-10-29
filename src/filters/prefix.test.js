const prefix = require('./prefix');

test('prefix() errs if prefix does not exist', () => {
  const middleware = prefix('/abc');

  middleware('/ab', (err) => {
    expect(err).toEqual('\'/ab\' doesn\'t start with \'/abc\'');
  });
});

test('prefix() strips prefix if it exists', () => {
  const middleware = prefix('/abc');

  middleware('/abc/def', (err, result) => {
    expect(result).toEqual('/def');
  });
});

test('prefix() returns "/" if prefix is same as url', () => {
  const middleware = prefix('/abc');

  middleware('/abc', (err, result) => {
    expect(result).toEqual('/');
  });
});

