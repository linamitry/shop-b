const ApiError = require('../error/ApiError')
const service = require('../services/brandService')
const createBrandRequest = require('../models/requests/createBrandRequest')

class BrandController {
    async create(req, res) {
        const model = new createBrandRequest(req.body)
        const brand = await service.create(model)
        return await res.json(brand)
    }

    async getAll(req, res) {
        const brands = await service.getAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()