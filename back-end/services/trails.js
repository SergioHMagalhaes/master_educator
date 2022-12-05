const models = require('../database/models');
const { Op } = require('sequelize')

module.exports = {
    async createTrail(newTrail){
        return await models.trails.create(newTrail)
    },

    async findAllTrails(){
        return await models.trails.findAll({
            include: {
                association: 'categories',
                attributes: ['name'],
            }
        })
    },

    async retrieveTrails(idTrails){
        return await models.trails.findOne({ where: { idTrails } })
    },

    async createCategory(newCategory){
        return await models.categories.create(newCategory)
    },

    async findAllCategories(){
        return await models.categories.findAll()
    },

    async findAllCategoriesAndTrails(){
        return await models.categories.findAll({
            include: {
                association: 'trails',
                attributes: ['idCategory', 'idTrails', 'image', 'name', 'nodes', 'content', 'height'],
                where: {
                    idCategory: {
                        [Op.col]: 'categories.idCategory'
                    }
                }
            }
        })
    }
}