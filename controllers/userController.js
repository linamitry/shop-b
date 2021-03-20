const ApiError = require('../error/ApiError')
const service = require('../services/userService')

class UserController {
    // TODO: валидация
    async registration(req, res, next) {
        const { email, password, role } = req.body
        const token = await service.registration(email, password, role)
        return res.json({token})
    }
    async login(req, res, next) {
        const { email, password } = req.body
        const token = await service.login(email, password)
        return res.json({token})
    }
    async check(req, res, next) {
        const token = await service.check(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
    async getAll(req, res) {
        const users = await service.getAll()
        return res.json(users)
    }
    async delete(req, res) {
        const user = await service.delete(req.params.id)
        return await res.json(user)
    }
    async put(req, res) {
        const userUp = await service.put(req.body)           
        return res.json(userUp[1])
    }
}

module.exports = new UserController()