const strip = (prefix) => (url, next) =>
  url.startsWith(prefix)
    ? next(null, url.slice(prefix.length) || '/')
    : next(`'${url}' doesn\'t start with '${prefix}'`);

module.exports = strip;

