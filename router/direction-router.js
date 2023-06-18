const Router = require('express');
const router = new Router();
const directionController = require('../controller/DirectionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware('ADMIN'), directionController.create);
router.get('/', authMiddleware('USER'), directionController.getAll);
router.get('/:id', authMiddleware('USER'), directionController.getOne);
router.put('/', authMiddleware('ADMIN'), directionController.update);
router.delete('/:id', authMiddleware('ADMIN'), directionController.delete);

module.exports = router;