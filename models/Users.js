module.exports = function(sequelize, DataTypes) {
   
    const Users = sequelize.define('Users',{
        username: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
            validate: {
              notEmpty: true
            }
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
              notEmpty: true
            }
        }
  
    })
    Users.associate = (models) => {
        Users.belongsToMany(models.Intake, {
          through: 'UsersIntake',
          as: 'intake',
          foreignKey: 'userId'
        });
      };
      return Users;
    
}
