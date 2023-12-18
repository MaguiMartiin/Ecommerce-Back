const { createProduct } = require('../controllers/productControllers')

const getProductsHandler = (req, res ) => {
    const {name} = req.query
    if (name) res.send(`producto ${name}`)
    else res.send('todos los productos')
}

const getIdProductHandler = (req, res ) => {
    const {id} = req.params 
    res.send(`este es el detalle del producto ${id}`)
}

const createProductHandler = async (req, res) => {
    try {
        const {name, description, price, stock, image, categoryId } = req.body
        const newProduct = await createProduct(name, description, price, stock, image, categoryId)
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getProductsHandler, getIdProductHandler, createProductHandler }