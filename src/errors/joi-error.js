class JoiError extends Error {
  constructor(message) {
    super();
    this.name = 'JoiError';
    this.error = `${message.toUpperCase()}`;
    this.statusCode = 400;
    this.status = 'Failed';
  }

  errorDto() {
    return {
      status: this.status,
      error: this.error,
    };
  }
}

module.exports = JoiError;
