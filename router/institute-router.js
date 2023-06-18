const Router = require('express');
const router = new Router();
const instituteController = require('../controller/InstituteController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware('ADMIN'), instituteController.create);
router.get('/', authMiddleware('USER'), instituteController.getAll);
router.get('/:id', authMiddleware('USER'), instituteController.getOne);
router.put('/', authMiddleware('ADMIN'), instituteController.update);
router.delete('/:id', authMiddleware('ADMIN'), instituteController.delete);

module.exports = router;