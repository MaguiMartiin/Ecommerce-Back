const { Category, Products} = require('../db')

const createProduct = async (name, description, price, stock, image, categoryId) => {
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

module.exports = { createProduct }