const { createProduct, getProductById, getAllProducts, searchProductsByName } = require('../controllers/productControllers')

const getProductsHandler = async (req, res ) => {
    const {name} = req.query
    const results = name ? await searchProductsByName(name) : await getAllProducts()
    try {
        if (name) res.status(200).json(results)
        else res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

const getIdProductHandler = async (req, res ) => {
    const {id} = req.params 
    try {
        const productId = await getProductById(id)
        res.status(200).json(productId)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createProductHandler = async (req, res) => {
    const {name, description, price, stock, image, categoryId, sizeId, colorId } = req.body
    try {
        const newProduct = await createProduct(name, description, price, stock, image, categoryId, sizeId, colorId)
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getProductsHandler, getIdProductHandler, createProductHandler }