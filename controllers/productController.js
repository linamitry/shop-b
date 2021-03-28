const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const service = require('../services/productService')




class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await service.create({name, price, brandId, typeId, info, img: fileName})
            
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let products = await service.getAll({limit, page, offset})

        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await service.getOne({id})
        return res.json(product)
    }
    async delete(req, res) {
        const product = await service.delete(req.params.id)
        return await res.json(product)
    }
    async update(req, res) {
        try {
            let {id, name, price, brandId, typeId, info} = req.body

            let fileName
            if (req.files) {
                const {img} = req.files
                fileName = uuid.v4() + '.jpg'
                img.mv(path.resolve(__dirname, '..', 'static', fileName))
            }
            const productUp = await service.update({id, name, price, brandId, typeId, info, img: fileName})
            return res.json(productUp[1])

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new ProductController()
