const {getAllCategories, createCategory, getProductByCategory} = require('../controllers/categoryControllers')

const getCategoryHandler = async (req, res) => {
    const {categoryId} = req.query
    try {
        const results = categoryId ? await getProductByCategory(categoryId) : await getAllCategories()
       
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getCategoryProductHandler = async (req, res) => {
    const {category} = req.query
    console.log(category);
    try {
        const productCategory = await getProductByCategory(category)
        res.status(200).json(productCategory)
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

module.exports = {getCategoryHandler, getCategoryProductHandler, createCategoryHandler}