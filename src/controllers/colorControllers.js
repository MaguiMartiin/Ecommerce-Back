const { Color } = require('../db')

const getAllColors = async () => {return await Color.findAll({order: [['name', 'ASC']] })}

const createColor = async (name) => {return await Color.create({ name })}

module.exports = { getAllColors, createColor}