'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    name: DataTypes.STRING,
    topicId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    src: DataTypes.STRING
  }, {});
  image.associate = function(models) {
    // associations can be defined here
    models.image.belongsTo(models.topic)
  };
  return image;
};