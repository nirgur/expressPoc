module.exports = (err, req, res, next) => {
  const json = typeof err.message === 'string' ? {message: err.message} : err.message
    res.status(err.statusCode).json(json);
}