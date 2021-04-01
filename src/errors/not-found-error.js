class NotFoundError extends Error {
  constructor() {
    super();
    this.name = 'NotFoundError';
    this.error = 'INFO_NOT_FOUND';
    this.status = 'Failed';
    this.statusCode = 404;
  }

  errorDto() {
    return {
      status: this.status,
      error: this.error,
    };
  }
}

module.exports = NotFoundError;
