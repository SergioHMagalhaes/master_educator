const services = require('../services/trails')

exports.create = async (req, res) => {
    try{
        const { name, image, idCategory, content, nodes, height } = req.body
        if(!name, !image, !idCategory, !content, !nodes, !height)
            return res.status(400).json({ message: "Dados enviados incorretamente." });
            
        const value = { name, image, idCategory, content, nodes, height }
        await services.createTrail(value)
        return res.status(200).json({ message: "Trilha cadastrado." });
    } catch(err){
        return res.status(500).json({ message: "Falha ao inserir os dados! Código: 500." })
    }
}

exports.listTrails = async (req, res) => {
    try{
        const result = await services.findAllTrails()
        return res.status(200).json(result);
    } catch(err){
        return res.status(500).json({ message: "Falha ao realizar busca no banco! Código: 500." })
    }
}

exports.retrieveTrails = async (req, res) => {
    try{
        const idTrails = req.params.id
        const result = await services.retrieveTrails(idTrails)
        return res.status(200).json(result);
    } catch(err){
        return res.status(500).json({ message: "Falha ao realizar busca no banco! Código: 500." })
    }
}

exports.createCategory = async (req, res) => {
    try{
        const { name } = req.body
        if(!name)
            return res.status(400).json({ message: "Dados enviados incorretamente." });
            
        await services.createCategory({name})
        return res.status(200).json({ message: "Categoria cadastrada." });
    } catch(err){
        return res.status(500).json({ message: "Falha ao inserir os dados! Código: 500." })
    }
}

exports.listCategories = async (req, res) => {
    try{
        const result = await services.findAllCategories()
        return res.status(200).json(result);
    } catch(err){
        return res.status(500).json({ message: "Falha ao realizar busca no banco! Código: 500." })
    }
}

exports.listCategoriesAndTrails = async (req, res) => {
    try{
        const result = await services.findAllCategoriesAndTrails()
        return res.status(200).json(result);
    } catch(err){
        return res.status(500).json({ message: "Falha ao realizar busca no banco! Código: 500." })
    }
}

