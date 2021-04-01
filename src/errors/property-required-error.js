class PropertyRequiredError extends Error {
  constructor(property) {
    super();
    this.name = 'PropertyRequiredError';
    this.error = `NO_${property.toUpperCase()}_PROPERTY`;
    this.status = 400;
  }

  errorResponse(res) {
    return res.status(this.status).json({ error: `${this.error}` });
  }

  errorDto() {
    return {
      status: this.status,
      message: this.message,
      error: this.error,
    };
  }
}

module.exports = PropertyRequiredError;
