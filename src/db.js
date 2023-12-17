require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommers`, {logging: false} )

const productsModel = require('./models/Products')
const categoryModel = require('./models/Category')

productsModel(sequelize)
categoryModel(sequelize)

const { Products, Category } = sequelize.models

Products.belongsTo(Category, { through: 'ProductsCategory' })
Category.belongsTo(Products, { through: 'ProductsCategory' }) 

module.exports = {sequelize}