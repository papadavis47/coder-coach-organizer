'use strict';
module.exports = (sequelize, DataTypes) => {
  const topic = sequelize.define('topic', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  topic.associate = function(models) {
    // associations can be defined here
  };
  return topic;
};