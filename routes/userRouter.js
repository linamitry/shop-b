const {Router} = require('express')
const router = Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check )
router.get('/', userController.getAll)
router.delete('/:id', userController.delete)
router.put('/', userController.update)

module.exports = router