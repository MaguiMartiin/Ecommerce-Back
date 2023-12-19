const {getAllColors, createColor} = require('../controllers/colorControllers')

const getColorHandler = async (req, res) => {
    try {
        const color = await getAllColors()
        res.status(200).json(color)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createColorHandler = async (req, res) => {
    const {name} = req.body
    try {
        const newColor = await createColor(name)
        res.status(200).json(newColor)
    } catch (error) {   
        res.status(400).json({error: error.message})
    }
}

module.exports = { getColorHandler, createColorHandler}