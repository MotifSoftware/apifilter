const all = (filters) => (url, next) => {
  for (const filter of filters) {
    let didErr = true;

    filter(url, (err) => { didErr = !!err; });

    if (didErr) return next('validation failed');
  }

  next();
};

module.exports = all;

