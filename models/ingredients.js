//this is the ingredients table
module.exports = function(sequelize, DataTypes) {

    const Ingredients = sequelize.define('Ingredients', {
     
        name: {
          allowNull: false,
          type: DataTypes.STRING,
          validate: {
            notEmpty: true
          }
        },
        measurements: {
          allowNull: true,
          type: DataTypes.STRING,
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
      //associating Recipes with the Ingredients through the join table
      Ingredients.associate = (models) => {
        Ingredients.belongsToMany(models.Recipes, {
          through: 'RecipesXIngredients',
          as: 'ingredients',
          foreignKey: 'ingId'
        });
      };
      return Ingredients;

}