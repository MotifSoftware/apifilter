const url = require('url');
const querystring = require('querystring');

const match = (matchUrl, params) => (requestUrl, next) => {
  const { query, pathname } = url.parse(requestUrl);
  const queryParams = querystring.parse(query);

  if (pathname !== matchUrl) next();
  else {
    const keys = Object.keys(params);

    const results = keys
      .map(key => [ key, params[key](queryParams[key]) ])
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

