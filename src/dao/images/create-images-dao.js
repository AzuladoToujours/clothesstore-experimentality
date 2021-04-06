const models = require('../../database/models');

const createImagesDAO = async (productId, uri, type) => {
  try {
    const createdImage = await models.Images.create({
      product_id: productId,
      uri,
      type,
    });

    return createdImage;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = { createImagesDAO };
