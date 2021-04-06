const { uploadToS3 } = require('../utils/aws-repository');
const { createProductDAO } = require('../dao/products/create-product-dao');
const { createImagesDAO } = require('../dao/images/create-images-dao');

/**
 * Creates a new product
 * @param {object} req
 * @param {object} res
 * @returns {json} json
 */

const postProductsService = async (req, res) => {
  let { mimetypeFront, mimetypeBack, mimetypesGeneral } = res.locals;

  const product = await createProductDAO(req.body);

  if (!product) {
    const DatabaseError = require('../errors/database-error');
    let databaseError = new DatabaseError();
    return res.status(databaseError.statusCode).json(databaseError.errorDto());
  }

  await createImage(
    product.id,
    'FRONT',
    req.files['frontImage'][0],
    mimetypeFront
  );

  await createImage(
    product.id,
    'BACK',
    req.files['backImage'][0],
    mimetypeBack
  );

  await createGeneralImages(
    product.id,
    req.files['generalImages'],
    mimetypesGeneral
  );

  return res.status(201).json({
    status: 'Succesful',
    message: 'CREATE_PRODUCT',
  });
};

const createImage = async (productId, type, photo, mimetype) => {
  let response = await uploadToS3(productId, type, photo, mimetype);
  await createImagesDAO(productId, response.Location, type);
};

const createGeneralImages = async (productId, photos, mimetypesGeneral) => {
  photos.map(async (photo, index) => {
    let response = await uploadToS3(
      productId,
      `GENERAL${index}`,
      photo,
      mimetypesGeneral[index]
    );
    await createImagesDAO(productId, response.Location, `GENERAL`);
  });
};

module.exports = { postProductsService };
