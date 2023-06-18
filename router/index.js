const Router = require('express');
const router = new Router();

const authRouter = require('./auth-router');
const userRouter = require('./user-router');
const instituteRouter = require('./institute-router');
const departmentRouter = require('./department-router');
const directionRouter = require('./direction-router');
const profileRouter = require('./profile-router');

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/institute', instituteRouter);
router.use('/department', departmentRouter);
router.use('/direction', directionRouter);
router.use('/profile', profileRouter);

module.exports = router;