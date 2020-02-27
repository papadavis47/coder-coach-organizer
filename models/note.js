'use strict';
module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    topicId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  note.associate = function(models) {
    // associations can be defined here
    models.note.belongsTo(models.topic)
  };
  return note;
};