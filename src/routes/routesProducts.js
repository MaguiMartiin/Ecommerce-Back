const { Router } = require('express')
const { getProductsHandler, getIdProductHandler, createProductHandler } = require('../handlers/handlersProducts')

const routesProducts = Router()

routesProducts.get('/', getProductsHandler)
routesProducts.get('/:id', getIdProductHandler)
routesProducts.post('/', createProductHandler)

module.exports = routesProducts