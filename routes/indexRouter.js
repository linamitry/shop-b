const {Router} = require('express')
const router = Router()
// const Router = require('express')
// const router = new Router()

const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

router.use('/v1/user', userRouter)
router.use('/v1/type', typeRouter)
router.use('/v1/brand', brandRouter)
router.use('/v1/product', productRouter)

module.exports = router