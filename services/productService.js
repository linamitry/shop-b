const uuid = require('uuid')
const path = require('path')
const { Product, ProductInfo } = require('../models');

class ProductService {
    async create({name, price, brandId, typeId, info, img: fileName}) {
        try {
            const product = await Product.create({name, price, brandId, typeId, img: fileName})
             if(info){
                info = JSON.parse(info)
                info.forEach(i => 
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    }))
            }
            return product
        } catch (e) {
            console.log(e);
        }
    }
    async getAll({limit, page, offset}) {
        try {
            return await Product.findAndCountAll({limit, page, offset})
        } catch (e) {
           console.log(e); 
        }
    }
    async getOne({id}) {
        try {
            return await Product.findOne(
                {
                    where: {id},
                    include: [{model: ProductInfo, as: 'info'}]
                },
            )
        } catch (e) {
           console.log(e); 
        }
    }
    async delete(id) {
        try {
            return await Product.destroy({where: {id}})
        } catch (e) {
           console.log(e); 
        }
    }
    async update({id, name, price, brandId, typeId, info, img: fileName}) {
        try {
            return await Product.update(
                {name, price, brandId, typeId, info, img: fileName},
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

module.exports = new ProductService()
