const { DataTypes } = require('sequelize');

module.exports = colorModel = (sequelize) => {
    sequelize.define('Color', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}
