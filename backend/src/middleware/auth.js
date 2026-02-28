const auth = (req, res, next) => {
  // Mock authenticaton logic
  const token = req.headers.authorization;

  if (!token) {
    const error = new Error("Unauthorized");
    error.statusCode = 401;
    return next(error);
  }

  // Verify token...
  req.user = { id: 1, name: "John Doe" }; // Set user info after successful validation
  next();
};

module.exports = auth;
