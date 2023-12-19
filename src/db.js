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
const colorModel = require('./models/Color')
const sizeModel = require('./models/Size')

productsModel(sequelize)
categoryModel(sequelize)
ordersModel(sequelize)
usersModel(sequelize)
colorModel(sequelize)
sizeModel(sequelize)

const { Products, Category, Orders, Users, Color, Size } = sequelize.models

Products.belongsToMany(Category, { through: 'ProductsCategory' })
Category.belongsToMany(Products, { through: 'ProductsCategory' }) 

Products.belongsToMany(Size, { through: 'ProductSize' });
Products.belongsToMany(Color, { through: 'ProductColor' });

Size.belongsToMany(Products, { through: 'ProductSize' });
Color.belongsToMany(Products, { through: 'ProductColor' });

Orders.belongsToMany(Products, { through: 'OrderProducts' });
Products.belongsToMany(Orders, { through: 'OrderProducts' });
Orders.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Orders, { foreignKey: 'user_id' });


module.exports = {sequelize, ...sequelize.models}