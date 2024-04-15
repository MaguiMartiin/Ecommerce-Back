const { Users } = require('../db')

const newUser = async (name, email, password) =>  {
    const user = await Users.create({name, email, password})
    return user
}

module.exports = { newUser }