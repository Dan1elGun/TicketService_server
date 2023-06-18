const ApiError = require('../exception/ApiError');
const userService = require('../service/UserService');


class UserController {
    async getAll(req, res, next) {
        try {
            const users = await userService.getAll();
            return res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            if (!id) {
                return next(ApiError.BadRequest('Не указан ID'));
            }
            const user = await userService.getOne(id);
            return res.json(user);
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new UserController();