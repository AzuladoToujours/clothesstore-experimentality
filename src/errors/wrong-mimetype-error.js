class WrongMimetypeError extends Error {
  constructor() {
    super();
    this.name = 'WrongMimetypeError';
    this.error = `WRONG_MIMETYPE_RECEIVED`;
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

module.exports = WrongMimetypeError;
