const apifilter = require('./apifilter');

test('apifilter() by default allows a request', (done) => {
  const middleware = apifilter();

  middleware({ url: '/' }, null, done);
});

test('apifilter() sends back a 403 code for erroneous filters', () => {
  const message = 'Error message';
  const middleware = apifilter([ (url, next) => next(message) ]);

  middleware({ url: '/' }, {
    status: (code) => {
      expect(code).toEqual(403);

      return {
        json: () => null,
      };
    },
  }, null);
});

test('apifilter() sends back an error message for erroneous filters', () => {
  const message = 'Error message';
  const middleware = apifilter([ (url, next) => next(message) ]);

  middleware({ url: '/' }, {
    status: (code) => {
      return {
        json: (result) => expect(result).toEqual({ error: message }),
      };
    },
  }, null);
});

test('apifilter() passes through URL if callback has no result', (done) => {
  const middleware = apifilter([
    (url, next) => next(),
    (url, next) => { expect(url).toEqual('/abc'); next(); },
  ]);

  middleware({ url: '/abc' }, null, done);
});

