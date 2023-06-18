const {Direction} = require('../model/models');

class DirectionService {
    async create(code, name, instituteId) {
        return await Direction.create({code: code, name: name, instituteId: instituteId});
    }

    async getAll() {
        return await Direction.findAll();
    }

    async getOne(id) {
        return await Direction.findOne({where: {id: id}});
    }

    async update(id, code, name, instituteId) {
        return await Direction.update(
            {code: code, name: name, instituteId: instituteId},
            {where: {id: id}});
    }

    async delete(id) {
        return await Direction.destroy({where: {id: id}});
    }
}

module.exports = new DirectionService();