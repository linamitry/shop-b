const {Router} = require('express')
const router = Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/authRoleMiddleware')

router.post('/',  brandController.create)
router.get('/', brandController.getAll)
router.delete('/:id', brandController.delete)
router.put('/', brandController.put)

module.exports = router

//checkRole('ADMIN')