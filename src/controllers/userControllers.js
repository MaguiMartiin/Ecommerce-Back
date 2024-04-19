require("dotenv").config()
const { Users } = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

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

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' })

    return {user, token}
}

module.exports = { newUser, loginUser }