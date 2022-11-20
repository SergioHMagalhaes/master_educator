const models = require('../database/models');

module.exports = {
    async createTrail(newTrail){
        await models.trails.create(newTrail)        
    },

    async createCategory(newCategory){
        return await models.categories.create(newCategory)
    },

    async findAllCategories(){
        return await models.categories.findAll()
    }
}