const {Router} = require('express')
const routesProducts = require('./routesProducts')
const routesCategory = require('./routesCategory')
const routesUsers = require('./routesUsers')

const routes = Router()

routes.use('/products', routesProducts )
routes.use('/categories', routesCategory)
routes.use('/users', routesUsers) 
  
module.exports = routes