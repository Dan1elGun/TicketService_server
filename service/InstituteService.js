const {Institute} = require('../model/models')

class InstituteService {
    async create(name) {
        return await Institute.create({name: name});
    }

    async getAll() {
        return await Institute.findAll();
    }

    async getOne(id) {
        return await Institute.findOne({where: {id: id}});
    }

    async update(id, name) {
        return await Institute.update(
            {name: name},
            {where: {id: id}});
    }

    async delete(id) {
        return await Institute.destroy({where: {id: id}});
    }
}

module.exports = new InstituteService();