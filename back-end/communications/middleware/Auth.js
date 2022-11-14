const jwt = require("jsonwebtoken");

module.exports = {
    authMiddleware: (userGroup) =>  async (req, res, next) => {
        const authToken = req.headers['authorization']
        if(authToken){
            const bearer = authToken.split(' ')
            const token = bearer[1]
            const decoded = jwt.verify(token, `${process.env.DB_URL}`)
            if(decoded.userGroup == 'Super') next();
            else if(userGroup == 'Comum') next();
            else if(userGroup == 'Premium' && decoded.userGroup == userGroup) next();
            else return res.status(403).json({ message: "Usuário não tem permissão." })
        }else{
            return res.status(403).json({ message: "Usuário não está autenticado." })
        }
    }
}