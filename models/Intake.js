module.exports = function(sequelize, DataTypes) {
   
    const Intake = sequelize.define('Intake',{
        water: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        waterAmount: {
            type: DataTypes.INTEGER,
            defaultValue: false
        },
        meditation: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        pills: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        interaction: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        goal: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        whatGoal: {
            type: DataTypes.STRING
        },
        food: {
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
