module.exports = function(sequelize, DataTypes) {
  
        const UsersIntake = sequelize.define('UsersIntake', {
            userId: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: 'Users',
                key: 'id'
              }
            },
            intId: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                model: 'Intake',
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
          return UsersIntake;
    }
