const Router = require('express');
const router = new Router();
const departmentController = require('../controller/DepartmentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware('ADMIN'), departmentController.create);
router.get('/', authMiddleware('USER'), departmentController.getAll);
router.get('/:id', authMiddleware('USER'), departmentController.getOne);
router.put('/', authMiddleware('ADMIN'), departmentController.update);
router.delete('/:id', authMiddleware('ADMIN'), departmentController.delete);

module.exports = router;