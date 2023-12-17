const getProductsHandler = (req, res ) => {
    const {name} = req.query
    if (name) res.send(`producto ${name}`)
    else res.send('todos los productos')
}

const getIdProductHandler = (req, res ) => {
    const {id} = req.params 
    res.send(`este es el detalle del producto ${id}`)
}

const createProductHandler = (req, res) => {
    const {name, description, price, stock, image, category } = req.body
    //categoryId: category
    res.send('manda toda la info para crear el producto')
}

module.exports = {getProductsHandler, getIdProductHandler, createProductHandler}