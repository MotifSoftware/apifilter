const url = require('url');

const match = (matchUrl, params) => (requestUrl, next) => {
  const { query, pathname } = url.parse(requestUrl);

  if (pathname !== matchUrl) next();
  else {
    const keys = Object.keys(params);

    const results = keys
      .map(key => [ key, params[key](query[key]) ])
      .filter(([ key, result ]) => !result)
      .map(([ key, _ ]) => `'${key}' failed validation`);

    if (results.length > 0) {
      next(results[0]);
    } else {
      next();
    }
  }
};

module.exports = match;

