const s3 = require('../config/aws');

exports.uploadToS3 = async (productId, type, photo, mimetype) => {
  const s3Client = s3.s3Client;
  const params = s3.uploadParams;

  params.Key = productId + '/' + `${type}.${mimetype}`;
  params.Body = photo.buffer;
  params.ContentEncoding = photo.encoding;
  params.ContentType = photo.mimetype;

  try {
    const response = await s3Client.upload(params).promise();

    return response;
  } catch (e) {
    console.log(e);
    return false;
  }
};
