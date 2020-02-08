//this is the recipes table
module.exports = function(sequelize, DataTypes) {

    const Recipes = sequelize.define('Recipes', {
        name: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true,
          validate: {
            notEmpty: true
          }
        },
        instructions: {
          allowNull: false,
          type: DataTypes.TEXT,
          // validate: {
          //   isLongEnough: function (val) {
          //     if (val.length > 10) {
          //       console.log("Text exceeds allowed lenth")
          //     }
          //   }
          // }
        },
        cooktime: {
          allowNull: true,
          type: DataTypes.INTEGER
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
      Recipes.associate = (models) => {
        Recipes.belongsToMany(models.Ingredients, {
          through: 'RecipesXIngredients',
          as: 'meals',
          foreignKey: 'recipeId'
        });
      };

      return Recipes;

}