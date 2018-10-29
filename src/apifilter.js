const apifilter = (filters=[]) => (req, res, next) => {
  let url = req.url;
  let shouldExit = false;

  const cb = (err, result) => {
    if (err) {
      res.status(403).json({ error: err });
      shouldExit = true;
    } else {
      url = result || url;
    }
  };

  for (const filter of filters) {
    filter(url, cb);

    if (shouldExit) return;
  }

  next();
};

module.exports = apifilter;

