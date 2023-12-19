const { Size } = require('../db')

const getAllSizes = async () => {return await Size.findAll()}

const createSize = async (name) => {return await Size.create({ name })}

module.exports = { getAllSizes, createSize}