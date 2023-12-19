const { DataTypes } = require('sequelize');

module.exports = sizeModel = (sequelize) => {
    sequelize.define('Size', {
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
