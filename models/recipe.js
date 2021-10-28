'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', {
    title: DataTypes.STRING(200)
  }, {});
  Recipe.associate = function(models) {
    Recipe.hasMany(models.instructions, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true});
  };
  return Recipe;
};
