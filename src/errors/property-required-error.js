class PropertyRequiredError extends Error {
  constructor(property) {
    super();
    this.name = 'PropertyRequiredError';
    this.error = `NO_${property.toUpperCase()}_PROPERTY`;
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

module.exports = PropertyRequiredError;
