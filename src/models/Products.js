const { DataTypes } = require('sequelize')

module.exports = productsModel = (sequelize) => {
    sequelize.define('Products', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false, 
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        stock:{
            type: DataTypes.ARRAY(DataTypes.JSONB({
                defaultValue: {
                    quantity: 0,
                    color: '',
                    size: '',
                }
            })),
            allowNull: false, 
        }, 
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
} 