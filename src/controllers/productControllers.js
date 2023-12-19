const { Category, Products, Size, Color} = require('../db')

const getAllProducts = async () => {return await Products.findAll()}

const searchProductsByName = async (name) => { return await Products.findAll({where: {name:name}})}

const getProductById = async (id) => { return await Products.findByPk(id)}

const createProduct = async (name, description, price, stock, image, categoryId, sizeId, colorId) => {
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
    const size = await Size.findByPk(sizeId)
    const color = await Color.findByPk(colorId)

    if (size && color) {
        await newProduct.addSize(size)
        await newProduct.addColor(color)
    }
    return newProduct
}

module.exports = { createProduct, getProductById, getAllProducts, searchProductsByName }