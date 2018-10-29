const all = require('./all');

test('all() passes if all filters pass', (done) => {
  const middleware = all([
    (url, next) => next(),
    (url, next) => next(),
  ]);

  middleware({ url: '/' }, done);
});

test('all() fails if any filter fails', () => {
  const middleware = all([
    (url, next) => next(),
    (url, next) => next('failure'),
  ]);

  middleware({ url: '/' }, (err, result) => {
    expect(err).toEqual('validation failed');
  });
});

