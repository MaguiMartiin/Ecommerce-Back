const {getAllCategories, createCategory, getProductByCategory} = require('../controllers/categoryControllers')

const getCategoryHandler = async (req, res) => {
    const { categoryId, name } = req.query
    try {
        let results
        if (categoryId) { results = await getProductByCategory(categoryId)
            if (name) {
                const filteredProductsCategory = results.filter(product =>
                    product.name.toLowerCase().includes(name.toLowerCase())
                )
                res.status(200).json(filteredProductsCategory);
                return
            }
        } else { results = await getAllCategories()}
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
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