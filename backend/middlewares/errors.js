const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(err);

    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {

    // Wrong Mongoose Object ID Error
    if (err.name === "CastError") {
      const message = `Nie znaleziono źródła. Nieprawidłowe: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Validation Error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose duplicate key errors
    if (err.code === 11000) {
      const message = `Zduplikowany ${Object.keys(err.keyValue)} entered`;
      error = new ErrorHandler(message, 400);
    }

    // Handling wrong JWT error
    if (err.name === "JsonWebTokenError") {
      const message = "JSON Web Token wygasł. Spróbuj ponownie";
      error = new ErrorHandler(message, 400);
    }

    // Handling Expired JWT error
    if (err.name === "TokenExpiredError") {
      const message = "JSON Web Token wygasł. Spróbuj ponownie";
      error = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Wewnętrzny błąd serwera :)",
    });
  }
};
