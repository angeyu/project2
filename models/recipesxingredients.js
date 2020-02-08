//this is the join table
module.exports = function(sequelize, DataTypes) {

    const RecipesXIngredients = sequelize.define('RecipesXIngredients', {
        recipeId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Recipes',
            key: 'id'
          }
        },
        ingId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Ingredients',
            key: 'id'
          }
        },
        createdAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
      });
      return RecipesXIngredients;

}