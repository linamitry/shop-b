const ApiError = require('../error/ApiError')
const service = require('../services/typeService')
const createTypeRequest = require('../models/requests/createTypeRequest')

class TypeController {
    async create(req, res) {
        const model = new createTypeRequest(req.body)
        const type = await service.create(model)
        return await res.json(type)
    }

    async getAll(req, res) {
        const types = await service.getAll()
        return res.json(types)
    }
}

module.exports = new TypeController()