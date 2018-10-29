const withinDays = require('./withinDays');

test('withinDays() returns false if value is not a date', () => {
  const matcher = withinDays(30, '2017-01-02');

  expect(matcher('abc')).toEqual(false);
});

test('withinDays() returns true if value is within correct days of given date', () => {
  const matcher = withinDays(10, '2017-01-15');

  expect(matcher('2017-01-05')).toEqual(true);
});

test('withinDays() returns false if value is not within correct days of given date', () => {
  const matcher = withinDays(10, '2017-01-15');

  expect(matcher('2017-01-04')).toEqual(false);
});

