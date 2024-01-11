const {getAllCategories, createCategory} = require('../controllers/categoryControllers')

const getCategoryHandler = async (req, res) => {
    try {
        const category = await getAllCategories()
        res.status(200).json(category)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createCategoryHandler = async (req, res) => {
    const {name} = req.body
    try {
        const newCategory = await createCategory(name)
        res.status(200).json(newCategory)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getCategoryHandler, createCategoryHandler}