const upload = require('../utils/multer');
const PropertyRequiredError = require('../errors/property-required-error');
const WrongMimetypeError = require('../errors/wrong-mimetype-error');

const images = upload.fields([
  { name: 'frontImage', maxCount: 1 },
  { name: 'backImage', maxCount: 1 },
  { name: 'generalImages', maxCount: 3 },
]);

const requiredImagesValidator = async (req, res, next) => {
  let propertyRequired = new PropertyRequiredError();
  if (!req.files) {
    propertyRequired.setPropertyAndError('files');
    return res
      .status(propertyRequired.statusCode)
      .json(propertyRequired.errorDto());
  }
  if (!req.files['frontImage']) {
    propertyRequired.setPropertyAndError('frontimage');
    return res
      .status(propertyRequired.statusCode)
      .json(propertyRequired.errorDto());
  } else if (!req.files['backImage']) {
    propertyRequired.setPropertyAndError('backimage');
    return res
      .status(propertyRequired.statusCode)
      .json(propertyRequired.errorDto());
  } else if (!req.files['generalImages']) {
    propertyRequired.setPropertyAndError('generalImages');
    return res
      .status(propertyRequired.statusCode)
      .json(propertyRequired.errorDto());
  } else {
    next();
  }
};

const validateImagesMimetype = async (req, res, next) => {
  let wrongMimetype = new WrongMimetypeError();
  if (!isCorrectMimetype(req.files['frontImage'][0].mimetype)) {
    return res.status(wrongMimetype.statusCode).json(wrongMimetype.errorDto());
  } else if (!isCorrectMimetype(req.files['backImage'][0].mimetype)) {
    return res.status(wrongMimetype.statusCode).json(wrongMimetype.errorDto());
  }
  req.files['generalImages'].map((generalImage) => {
    if (!isCorrectMimetype(generalImage.mimetype)) {
      return res
        .status(wrongMimetype.statusCode)
        .json(wrongMimetype.errorDto());
    }
  });

  res.locals.mimetypeFront = getMimetype(req.files['frontImage'][0].mimetype);
  res.locals.mimetypeBack = getMimetype(req.files['backImage'][0].mimetype);
  res.locals.mimetypesGeneral = [];
  req.files['generalImages'].map((generalImage) => {
    res.locals.mimetypesGeneral.push(getMimetype(generalImage.mimetype));
  });
  next();
};

const getMimetype = (mimetype) => {
  return mimetype.replace('image/', '');
};

const isCorrectMimetype = (mimetype) => {
  let correctMimetype =
    mimetype == 'image/png' ||
    mimetype == 'image/jpeg' ||
    mimetype == 'image/jpg';
  return correctMimetype;
};

module.exports = { images, requiredImagesValidator, validateImagesMimetype };
