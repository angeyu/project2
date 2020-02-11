module.exports = function(sequelize, DataTypes) {
   
    const Intake = sequelize.define('Intake',{
        water: {
            type: DataTypes.INTEGER
        },
        meditate: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        medication: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        interaction: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Goal: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Food: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    })
    Intake.associate = (models) => {
        Intake.belongsToMany(models.Users, {
          through: 'UsersIntake',
          as: 'users',
          foreignKey: 'intId'
        });
      };
      return Intake;
}