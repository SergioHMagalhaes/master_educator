const bcrypt = require('bcrypt');
const models = require('../database/models');
const jwt = require('jsonwebtoken')

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
        newUser.userGroupId = 1
        await models.users.create(newUser)
    },
    async generateJWT(email, password){
        const user = await models.users.findOne({
            where: {
                email: email,
            },
            include: [{
                association: "userGroups",
                attributes: ["userGroupId", "name"],
            }]
        })

        if(!user) return
        const correctPassword = await bcrypt.compare(password, user.password)
        if(correctPassword){
            const userObject = {
                name: user.name,
                userGroup: user.userGroups.name,
                email: user.email
            }
            const token =  jwt.sign(userObject, `${process.env.DB_URL}`);
            return { token, user: userObject }
        }
    }
}