const { getAllSizes, createSize } = require('../controllers/sizeControllers')

const getSizeHandler = async (req, res) => {
    try {
        const size = await getAllSizes()
        res.status(200).json(size)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createSizeHandler = async (req, res) => {
    const {name} = req.body
    try {
        const newSize = await createSize(name)
        res.status(200).json(newSize)
    } catch (error) {   
        res.status(400).json({error: error.message})
    }
}

module.exports = { getSizeHandler, createSizeHandler}