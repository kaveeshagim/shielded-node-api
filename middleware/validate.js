const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.errors.map((e) => e.message);
    return res.status(400).json({ errors });
  }
  req.body = result.data; // safely parsed + validated input
  next();
};

module.exports = validate;
