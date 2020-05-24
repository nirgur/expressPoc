class ValidationError extends Error {
  constructor(message) {
    super();
    this.statusCode = 422;
    this.message = message;
  }
}
module.exports = ValidationError;
