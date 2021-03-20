const {Router} = require('express')
const router = Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/authRoleMiddleware')

router.post('/', typeController.create)
router.get('/',typeController.getAll)
router.delete('/:id', typeController.delete)
router.put('/', typeController.put)

module.exports = router

//checkRole('ADMIN')