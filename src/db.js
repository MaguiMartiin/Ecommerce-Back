require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommers`, {
    logging: false,
    define: {
        timestamps: false
    }
})

const productsModel = require('./models/Products')
const categoryModel = require('./models/Category')
const ordersModel = require('./models/Orders')
const usersModel = require('./models/Users')

productsModel(sequelize)
categoryModel(sequelize)
ordersModel(sequelize)
usersModel(sequelize)

const { Products, Category, Orders, Users } = sequelize.models

Products.belongsToMany(Category, { through: 'ProductsCategory' })
Category.belongsToMany(Products, { through: 'ProductsCategory' }) 

Orders.belongsToMany(Products, { through: 'OrderProducts' });
Products.belongsToMany(Orders, { through: 'OrderProducts' });
Orders.belongsTo(Users);
Users.hasMany(Orders);



module.exports = {sequelize}