const { newUser } = require('../controllers/userControllers')

const createUserHandler = async (req, res) => {
    const { name, email, password} = req.body
    try {
        const createUser = await newUser(name, email, password)
        res.status(201).json(createUser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createUserHandler}