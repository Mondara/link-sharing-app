const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);

  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const errorMessage = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    errorMessage = "Resources not found";
  }

  res.status(statusCode).json({
    message: errorMessage,
    stack: process.env.NODE_ENV !== "production" ? err.stack : null,
  });
};

module.exports = { notFound, errorHandler };
