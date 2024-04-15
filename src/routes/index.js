const {Router} = require('express')
const routesProducts = require('./routesProducts')
const routesCategory = require('./routesCategory')

const routes = Router()

routes.use('/products', routesProducts )
routes.use('/categories', routesCategory)
  
module.exports = routes