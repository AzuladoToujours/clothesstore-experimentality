class PropertyRequiredError extends Error {
  constructor() {
    super();
    this.property = '';
    this.name = 'PropertyRequiredError';
    this.error = '';
    this.statusCode = 400;
    this.status = 'Failed';
  }

  setPropertyAndError(property) {
    this.property = property;
    this.error = `NO_${this.property.toUpperCase()}_PROPERTY`;
  }

  errorDto() {
    return {
      status: this.status,
      error: this.error,
    };
  }
}

module.exports = PropertyRequiredError;
