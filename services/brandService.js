const {Brand} = require('../models/models')

class BrandService {
    async create(model) {
        try {
            return await Brand.create(model)
        } catch (e) {
            console.log(e);
        }
    }
    async getAll() {
        try {
            return await Brand.findAll()
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new BrandService()