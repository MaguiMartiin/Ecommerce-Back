const { Category, Products } = require('../db')
const Sequelize = require('sequelize')

const getAllProducts = async () => {return await Products.findAll({
    order: [['name', 'ASC']], 
    include: [
        {
        model: Category,
        through: { attributes: [] },
        attributes: ['name'],
        }
    ],
})}

const searchProductsByName = async (name) => { return await Products.findAll({where: 
    {name:
        {[Sequelize.Op.iLike]: `%${name}%` 
    }}
})}

const getProductById = async (id) => { return await Products.findByPk(id, {
    include: [{
        model: Category,
        through: { attributes: [] },
        attributes: ['name'],
    }]
})}

const createProduct = async (name, description, price, stock, image, categoryId ) => {
    const newProduct = await Products.create({
        name,
        description,
        price,
        stock,
        image,
    })
    const category = await Category.findByPk(categoryId)
    if (category) {
        await newProduct.addCategory(category);
    }
    return newProduct
}

module.exports = { createProduct, getProductById, getAllProducts, searchProductsByName }