const ApiError = require('../error/ApiError')
const service = require('../services/brandService')

class BrandController {
    async create(req, res) {
        const brand = await service.create(req.body)
        return await res.json(brand)
    }
    async getAll(req, res) {
        const brands = await service.getAll()
        return res.json(brands)
    }
    async delete(req, res) {
        const brand = await service.delete(req.params.id)
        return await res.json(brand)
    }
    async update(req, res) {
        const brandUp = await service.update(req.body)           
        return res.json(brandUp[1])
    }
}

module.exports = new BrandController()