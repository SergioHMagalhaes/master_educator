const services = require('../services/user')

exports.create = async (req, res) => {
    try{
        const {name, email, password} = req.body
        if(!name, !email, !password)
            return res.status(400).json({ message: "Dados enviados incorretamente." });
            
        const value = {name, email, password}
        const duplicateEmail = await services.checkDuplicateEmail(email)
        if(duplicateEmail)
            return res.status(400).json({ message: "E-mail já existe." });

        await services.createUser(value)
        return res.status(200).json({ message: "Usuário cadastrado." });
    } catch(err){
        return res.status(500).json({ message: "Falha ao inserir os dados! Código: 500." })
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body
        if(!email, !password)
            return res.status(400).json({ message: "Dados enviados incorretamente." });

        const result = await services.generateJWT(email, password)
        if(result) return res.status(200).json({ token: result.token, user: result.user });
        else return res.status(401).json({ message: 'Senha incorreta.' });
       
    } catch(err){
        return res.status(500).json({ message: "Falha na autenticação! Código: 500."})
    }
}