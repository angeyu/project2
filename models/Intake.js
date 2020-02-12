module.exports = function(sequelize, DataTypes) {
   
    const Intake = sequelize.define('Intake',{
        water: {
            type: DataTypes.INTEGER,
            defaultValue: false
        },
        meditate: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        medication: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        interaction: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Goal: {
            type: DataTypes.STRING,
        },
        Food: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: true,  
        },
            updatedAt: {
            type: DataTypes.DATE,
            allowNull: true, 
        }

    })
      return Intake;
}
