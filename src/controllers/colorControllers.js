const { Color } = require('../db')

const getAllColors = async () => {return await Color.findAll()}

const createColor = async (name) => {return await Color.create({ name })}

module.exports = { getAllColors, createColor}