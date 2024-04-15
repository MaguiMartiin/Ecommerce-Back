const { Users } = require('../db')
const bcrypt = require('bcrypt')

const newUser = async (name, email, password) =>  {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await Users.create({name, email, password: hashedPassword})
    return user
}

const loginUser = async (email, password) => {
    const user = await Users.findOne({ where: { email } })
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!user) {
        throw new Error('Email o contraseña incorrectos')
    }

    if (!passwordMatch) {
        throw new Error('Email o contraseña incorrectos')
    }

    return user
}

module.exports = { newUser, loginUser }