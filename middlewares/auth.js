const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    }

    const token = authorization.replace("Bearer ", "");

    const payload = jwt.verify(token, "super-secret-key");

    req.user = payload;

    return next();
  } catch (err) {
    return res.status(401).send({
      message: "Unauthorized",
    });
  }
};

module.exports = auth;
