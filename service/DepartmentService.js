const {Department} = require('../model/models');

class DepartmentService {
    async create(name, instituteId) {
        return await Department.create({name: name, instituteId: instituteId});
    }

    async getAll() {
        return await Department.findAll();
    }

    async getOne(id) {
        return await Department.findOne({where: {id: id}});
    }

    async update(id, name, instituteId) {
        return await Department.update(
            {name: name, instituteId: instituteId},
            {where: {id: id}});
    }

    async delete(id) {
        return await Department.destroy({where: {id: id}});
    }
}

module.exports = new DepartmentService();