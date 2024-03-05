const {Category, Products} = require('../db')

const getAllCategories = async  () => {return await Category.findAll({order: [['name', 'ASC']], include: [
    {
      model: Products,
      through: { attributes: [] },
    },
  ], })}

const createCategory = async (name) => {return await Category.create({ name })}

const getProductByCategory = async (categoryId) => {
    return await Products.findAll({
        include: [
            {
                model: Category,
                through: { attributes: [] },
                where: { id: categoryId },
            },
        ],
    });
}


module.exports = { getAllCategories, createCategory, getProductByCategory}