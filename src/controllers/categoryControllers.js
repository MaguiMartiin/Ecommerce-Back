const {Category} = require('../db')

const getAllCategories = async  () => {return await Category.findAll({order: [['name', 'ASC']] })}

const createCategory = async (name) => {return await Category.create({ name })}

module.exports = { getAllCategories, createCategory}