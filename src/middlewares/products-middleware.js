const Joi = require('joi');
const JoiError = require('../errors/joi-error');

const schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  price: Joi.number().integer().min(1000).required(),
  discount: Joi.number().integer().min(1).max(100),
  description: Joi.string().min(3).max(50).required(),
});

const validateProduct = async (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    let joiError = new JoiError(error.details[0].message);
    return res.status(joiError.statusCode).json(joiError.errorDto());
  } else {
    next();
  }
};

module.exports = { validateProduct };
