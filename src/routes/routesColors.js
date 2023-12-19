const {Router} = require('express')
const { createColorHandler, getColorHandler } = require('../handlers/handlersColors')

const routesColors = Router()

routesColors.get('/', getColorHandler)
routesColors.post('/', createColorHandler)

module.exports = routesColors