const ApiError = require('../exception/ApiError');
const instituteService = require('../service/InstituteService');

class InstituteController {
    async create(req, res, next) {
        try {
            const {name} = req.body;
            const institute = await instituteService.create(name);
            return res.json(institute);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const institute = await instituteService.getAll();
            return res.json(institute);
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
            const institute = await instituteService.getOne(id);
            return res.json(institute);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const institute = req.body;
            if (!institute.id) {
                return next(ApiError.BadRequest('Не указан ID'));
            }
            const updatedInstitute = await instituteService.update(
                institute.id, institute.name);
            return res.json(updatedInstitute);
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
            const institute = await instituteService.delete(id);
            return res.json(institute);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new InstituteController();