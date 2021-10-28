'use strict';
const { Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const instructions = sequelize.define('instructions', {
    specification: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
        allowNull: false
      }
    },
    listOrder: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false,
        [Op.gt]: 0
      }
    },
    recipeId: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false
      }
    }
  }, {});
  instructions.associate = function(models) {
    instructions.belongsTo(models.recipe, { foreignKey: 'recipeId'});
  };
  return instructions;
};
