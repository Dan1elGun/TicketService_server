const {Profile} = require('../model/models')

class ProfileService {
    async create(name, directionId) {
        return await Profile.create({name: name, directionId: directionId});
    }

    async getAll() {
        return await Profile.findAll();
    }

    async getOne(id) {
        return await Profile.findOne({where: {id: id}});
    }

    async update(id, name, directionId) {
        return await Profile.update(
            {name: name, directionId: directionId},
            {where: {id: id}});
    }

    async delete(id) {
        return await Profile.destroy({where: {id: id}});
    }
}

module.exports = new ProfileService();