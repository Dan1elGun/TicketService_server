const ApiError = require('../exception/ApiError');
const profileService = require('../service/ProfileService');

class ProfileController {
    async create(req, res, next) {
        try {
            const {name, directionId} = req.body;
            const profile = await profileService.create(name, directionId);
            return res.json(profile);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req, res, next) {
        try {
            const profile = await profileService.getAll();
            return res.json(profile);
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
            const profile = await profileService.getOne(id);
            return res.json(profile);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const profile = req.body;
            if (!profile.id) {
                return next(ApiError.BadRequest('Не указан ID'));
            }
            const updatedProfile = await profileService.update(
                profile.id, profile.name, profile.directionId);
            return res.json(updatedProfile);
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
            const profile = await profileService.delete(id);
            return res.json(profile);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ProfileController();