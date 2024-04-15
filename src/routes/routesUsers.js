const {Router} = require('express')
const { createUserHandler, loginUserHandler } = require('../handlers/handlersUsers')

const routesUsers = Router()

routesUsers.post('/', createUserHandler )
routesUsers.post('/login', loginUserHandler)

module.exports = routesUsers