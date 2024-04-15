const { newUser, loginUser } = require('../controllers/userControllers')

const createUserHandler = async (req, res) => {
    const { name, email, password} = req.body
    try {
        const createUser = await newUser(name, email, password)
        res.status(201).json(createUser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const loginUserHandler = async (req, res) => {
    const { email, password } = req.body
    try {
        const login = await loginUser(email, password)
        res.status(200).json(login)
    } catch (error) {
        res.status(401).json({error: error.message})
    }   
}

module.exports = { createUserHandler, loginUserHandler }