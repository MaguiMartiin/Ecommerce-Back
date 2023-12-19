const {Router} = require('express')
const routesProducts = require('./routesProducts')
const routesColors = require('./routesColors')
const routesSizes = require('./routesSizes')

const routes = Router()

routes.use('/products', routesProducts )
routes.use('/colors', routesColors )
routes.use('/sizes', routesSizes)
  
module.exports = routes