const {User} = require("../model/models");

class UserService {
    async getAll() {
        return await User.findAll();
    }

    async getOne(id) {
        return await User.findOne({where: {id: id}});
    }
}

module.exports = new UserService();