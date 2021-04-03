'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Products, {
        foreignKey: 'product_id',
      });
    }
  }
  Images.init(
    {
      product_id: DataTypes.UUID,
      uri: DataTypes.STRING,
      type: {
        type: DataTypes.ENUM,
        values: ['FRONT', 'BACK', 'GENERAL'],
      },
    },
    {
      sequelize,
      modelName: 'Images',
    }
  );
  return Images;
};
