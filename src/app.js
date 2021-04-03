const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const morganMode = `${process.env.ENV}` || 'dev';
const { restartProductsVisits } = require('./utils/products-utils');
const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');

//Importing routes
const ProductRoutes = require('./routes/routes');

//Middlewares configuration
app.use(morgan(morganMode));
app.use(express.json());
app.use(cors());

//Routes configuration
app.use(`/api/`, ProductRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('*', function (req, res) {
  const NotFoundError = require('./errors/not-found-error');
  let notFound = new NotFoundError();
  return res.status(notFound.statusCode).json(notFound.errorDto());
});

restartProductsVisits.start();

module.exports = app;
