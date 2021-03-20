const {Brand} = require('../models/models')

class BrandService {
    async create({name}) {
        try {
            return await Brand.create({name})
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
    async delete(id) {
        try {
            return await Brand.destroy({where: {id}})
        } catch (e) {
            console.log(e);
        }
    }
    async put({id,name}) {
        try {
            return await Brand.update(
                {name},
                {
                    where: {id},
                    returning: true, 
                    plain: true
                })
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new BrandService()