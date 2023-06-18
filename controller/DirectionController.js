const ApiError = require('../exception/ApiError');
const directionService = require('../service/DirectionService');

class DirectionController {
    async create(req, res, next) {
        try {
            const {code, name, instituteId} = req.body;
            const regEx = /\d\d\.\d\d\.\d\d/;
            if (!code.match(regEx)) {
                return next(ApiError.BadRequest('Неверный формат кода направления. Пример: 00.00.00'));
            }
            const direction = await directionService.create(code, name, instituteId);
            return res.json(direction);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const direction = await directionService.getAll();
            return res.json(direction);
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
            const direction = await directionService.getOne(id);
            return res.json(direction);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const direction = req.body;
            if (!direction.id) {
                return next(ApiError.BadRequest('Не указан ID'));
            }
            const regEx = /\d\d\.\d\d\.\d\d/;
            if (!direction.code.match(regEx)) {
                return next(ApiError.BadRequest('Неверный формат кода направления. Пример: 00.00.00'));
            }
            const updatedDirection = await directionService.update(
                direction.id, direction.code, direction.name, direction.instituteId);
            return res.json(updatedDirection);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            if (!id) {
                return next(ApiError.BadRequest('Не указан ID'));
            }
            const direction = await directionService.delete(id);
            return res.json(direction);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new DirectionController();