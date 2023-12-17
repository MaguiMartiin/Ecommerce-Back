const { DataTypes } = require('sequelize')

module.exports = ordersModel = (sequelize) => {
    sequelize.define('Orders', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            allowNull: false,
            utoIncrement: true,
        },
        orderDate: {                //Fecha de creación
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        shippingAddress: {          //Direccion de envío     
            type: DataTypes.STRING,
            allowNull: false,
        },
        paymentStatus: {            //Estado del pago
            type: DataTypes.STRING,
            allowNull: false,
        },
        shippingStatus: {           //Estado del envío
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}