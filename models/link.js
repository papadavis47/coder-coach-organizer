'use strict';
module.exports = (sequelize, DataTypes) => {
  const link = sequelize.define('link', {
    href: DataTypes.STRING,
    topicId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  link.associate = function(models) {
    // associations can be defined here
  };
  return link;
};