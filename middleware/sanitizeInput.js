const sanitize = (obj) => {
  for (let key in obj) {
    if (/^\$/.test(key) || /\./.test(key)) {
      delete obj[key];
    }
  }
  return obj;
};

const sanitizeInput = (req, res, next) => {
  if (req.body) req.body = sanitize(req.body);
  if (req.query) req.query = sanitize(req.query);
  if (req.params) req.params = sanitize(req.params);
  next();
};

module.exports = sanitizeInput;
