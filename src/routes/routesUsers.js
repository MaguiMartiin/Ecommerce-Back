const {Router} = require('express')
const { createUserHandler } = require('../handlers/handlersUsers')

const routesUsers = Router()

routesUsers.post('/', createUserHandler )

module.exports = routesUsers