const Router = require('express');
const router = new Router();
const userController = require('../controller/UserController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware('ADMIN'), userController.getAll);
router.get('/:id', authMiddleware('ADMIN'), userController.getOne);

module.exports = router;