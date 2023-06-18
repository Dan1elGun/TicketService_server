const Router = require('express');
const router = new Router();
const profileController = require('../controller/ProfileController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware('ADMIN'), profileController.create);
router.get('/', authMiddleware('USER'), profileController.getAll);
router.get('/:id', authMiddleware('USER'), profileController.getOne);
router.put('/', authMiddleware('ADMIN'), profileController.update);
router.delete('/:id', authMiddleware('ADMIN'), profileController.delete);

module.exports = router;