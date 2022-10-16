// const jwt = require("jsonwebtoken");
// const { SECRET } = require("./config.js");

const unKnownEndPoint = (req, res, next) => {
  res.status(404).send({ err: "Unknown endpoint" });
};

// const tokenExtractor = (req, res, next) => {
//   const authorization = req.get("authorization");
//   if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
//     try {
//       req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
//     } catch {
//       return res.status(401).json({ error: "token invalid" });
//     }
//   } else {
//     return res.status(401).json({ error: "token missing" });
//   }

//   next();
// };

const userExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    req.user = authorization.substring(7);
  }

  next();
};

const errorHandler = (err, req, res, next) => {
  console.log(err.message);

  if (err.name === "CastError") {
    return res.status(400).send({ err: "malformatted id" });
  } else if (err.name === "SequelizeValidationError") {
    return res.status(400).json({ err: err.message });
  } else if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ err: err.message });
  } else if (err.name === "TokenExpiredError") {
    return res.status(401).json({ err: err.message });
  }

  next(err);
};

module.exports = {
  unKnownEndPoint,
  errorHandler,
  userExtractor,
};
