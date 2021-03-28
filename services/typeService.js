const { Type } = require('../models');


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
    async delete(id) {
        try {
            return await Type.destroy({where: {id}})
        } catch (e) {
           console.log(e); 
        }
    }
    async update({id,name}) {
        try {
            return await Type.update(
                {name: name},
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

module.exports = new TypeService()