const ApiError = require('../exception/ApiError');
const departmentService = require('../service/DepartmentService');

class DepartmentController {
    async create(req, res, next) {
        try {
            const {name, instituteId} = req.body;
            const department = await departmentService.create(name, instituteId);
            return res.json(department);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const department = await departmentService.getAll();
            return res.json(department);
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
            const department = await departmentService.getOne(id);
            return res.json(department);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const department = req.body;
            if (!department.id) {
                return next(ApiError.BadRequest('Не указан ID'));
            }
            const updatedDepartment = await departmentService.update(
                department.id, department.name, department.instituteId);
            return res.json(updatedDepartment);
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
            const department = await departmentService.delete(id);
            return res.json(department);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new DepartmentController();