const ApiError = require('../error/ApiError')
const service = require('../services/typeService')

class TypeController {
    async create(req, res) {
        const type = await service.create(req.body)
        return await res.json(type)
    }
    async getAll(req, res) {
        const types = await service.getAll()
        return res.json(types)
    }
    async delete(req, res) {
        const type = await service.delete(req.params.id)
        return await res.json(type)    
    }
    async update(req, res) {
        const typeUp = await service.update(req.body)           
        return res.json(typeUp[1])
    }
}

module.exports = new TypeController()


