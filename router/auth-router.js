const Router = require('express').Router;
const authController = require('../controller/AuthController');
const router = new Router();
const {body} = require('express-validator');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 32}),
    authController.registration
);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/activate/:link', authController.activate);
router.get('/refresh', authController.refresh);

module.exports = router;