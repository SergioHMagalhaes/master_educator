const bcrypt = require('bcrypt');
const models = require('../database/models');

module.exports = {
    async checkDuplicateEmail(email){
        return models.users.findOne({
            where: {
                email: email
            }
        })
    },
    async createUser(newUser){
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(newUser.password, salt)
        newUser.password = hash
        await models.users.create(newUser)
    }
}