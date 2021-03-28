const {Router} = require('express')
const router = Router()
const productController = require('../controllers/productController')
const checkRole = require('../middleware/authRoleMiddleware')

router.post('/', productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)
router.delete('/:id', productController.delete)
router.put('/', productController.update)

module.exports = router

//checkRole('ADMIN'),