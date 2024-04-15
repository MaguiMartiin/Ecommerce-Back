const { Users } = require('../db')
const bcrypt = require('bcrypt')

const newUser = async (name, email, password) =>  {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await Users.create({name, email, password: hashedPassword})
    return user
}

module.exports = { newUser }