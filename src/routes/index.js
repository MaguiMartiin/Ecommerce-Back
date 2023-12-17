const {Router} = require('express')
const routesProducts = require('./routesProducts')

const routes = Router()

routes.use('/products', routesProducts )
  
module.exports = routes