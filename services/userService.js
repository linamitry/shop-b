const { User, Cart} = require('../models');
const ApiError = require('../error/ApiError')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
        ) 
    }
class UserService {
    async registration(email, password, role, next) {
        try {
            const candidate = await User.findOne({where: {email}})
            if(!email || !password) {
                return next(ApiError.badRequest('Invalid email or password'))
            }
            if(candidate) {
                return next(ApiError.badRequest('Email exists'))
            }
            const hashPassword = bcrypt.hashSync(password, 12)
            const user = await User.create({email, role, password: hashPassword})
            const cart = await Cart.create({userId: user.id})
            const token = generateJwt( user.id, user.email, user.role )
            console.log('LOGLOGLOG',token);
            return token

        } catch (e) {
            console.log(e);
        }
    }
    async login(email, password, next) {
        try {
            const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Invalid password'))
        }
        const token = generateJwt( user.id, user.email, user.role )
        return token
        } catch (e) {
           console.log(e); 
        }
    }
    async check(id, email, role) {
        try {
        const token = generateJwt(id, email, role)
        return token

        } catch (e) {
           console.log(e); 
        }
    }
    async getAll() {
        try {
            return await User.findAll()
        } catch (e) {
           console.log(e); 
        }
    }
    async delete(id) {
        try {
            return await User.destroy({where: {id}})
        } catch (e) {
           console.log(e); 
        }
    }
    async update({id,email}) {
        try {
            return await User.update(
                {email: email},
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

module.exports = new UserService()