'use strict';
module.exports = (sequelize, DataTypes) => {
  const topic = sequelize.define('topic', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  topic.associate = function(models) {
    // associations can be defined here
    models.topic.hasMany(models.note)
    models.topic.hasMany(models.image)
    models.topic.hasMany(models.link)
  };
  return topic;
};