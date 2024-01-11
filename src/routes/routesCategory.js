const {Router} = require('express')
const { getCategoryHandler, createCategoryHandler } = require('../handlers/handlersCategory')

const routesCategory = Router()

routesCategory.get('/', getCategoryHandler)
routesCategory.post('/', createCategoryHandler)

module.exports = routesCategory