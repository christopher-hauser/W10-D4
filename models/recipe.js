'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    specification: DataTypes.TEXT,
    listOrder: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {});
  recipe.associate = function(models) {
    Recipe.hasMany(models.instruction, { foreignKey: 'recipeId'});
  };
  return recipe;
};
