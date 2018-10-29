const oneOf = require('./oneOf');

test('oneOf() returns true if value is in list', () => {
  const matcher = oneOf([ 'abc', 'def' ]);

  expect(matcher('abc')).toEqual(true);
});

test('oneOf() returns false if value is not in list', () => {
  const matcher = oneOf([ 'abc', 'def' ]);

  expect(matcher('ghi')).toEqual(false);
});

