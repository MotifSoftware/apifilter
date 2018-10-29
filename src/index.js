const apifilter = require('./apifilter');
const filters = require('./filters');
const matchers = require('./matchers');

for (const key of Object.keys(filters)) {
  apifilter[key] = filters[key];
}

for (const matcherKey of Object.keys(matchers)) {
  apifilter[matcherKey] = matchers[matcherKey];
}

module.exports = apifilter;

