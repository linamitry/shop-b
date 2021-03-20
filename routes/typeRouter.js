const {Router} = require('express')
const router = Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/authRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/',typeController.getAll)
router.delete('/:id', checkRole('ADMIN'), typeController.delete)
router.put('/', checkRole('ADMIN'), typeController.put)

module.exports = router