class DatabaseError extends Error {
  constructor() {
    super();
    this.name = 'DatabaseError';
    this.error = `INTERNAL_SERVER_ERROR`;
    this.statusCode = 500;
    this.status = 'Failed';
  }

  errorDto() {
    return {
      status: this.status,
      error: this.error,
    };
  }
}

module.exports = DatabaseError;
