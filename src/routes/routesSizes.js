const { Router } = require('express')
const { getSizeHandler, createSizeHandler } = require('../handlers/handlersSizes')

const routesSizes = Router()

routesSizes.get('/', getSizeHandler)
routesSizes.post('/', createSizeHandler)

module.exports = routesSizes