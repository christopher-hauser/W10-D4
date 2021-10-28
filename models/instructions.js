'use strict';
const { Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const instructions = sequelize.define('instructions', {
    specification: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    listOrder: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true,
        [Op.gt]: 0
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      validate: {
        notNull: true
      }
    }
  }, {});
  instructions.associate = function(models) {
    instructions.belongsTo(models.Recipe, { foreignKey: 'recipeId'});
  };
  return instructions;
};
