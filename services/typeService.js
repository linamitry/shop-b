const {Type} = require('../models/models')

class TypeService {
    async create(model) {
        try {
            return await Type.create(model)            
        } catch (e) {
            console.log(e);
        }
    }
    async getAll() {
        try {
            return await Type.findAll()
        } catch (e) {
           console.log(e); 
        }
    }
    
}

module.exports = new TypeService()