const ApiError = require('../exception/ApiError');
const tokenService = require('../service/TokenService');

module.exports = function (role) {
    return function (req, res, next) {
        try {
            const authorizationHeader = req.headers.authorization;
            if (!authorizationHeader) {
                return next(ApiError.Unauthorized());
            }

            const accessToken = authorizationHeader.split(' ')[1];
            if (!accessToken) {
                return next(ApiError.Unauthorized());
            }

            const userData = tokenService.validateAccessToken(accessToken);
            if (!userData) {
                return next(ApiError.Unauthorized());
            }

            if (userData.isActivated === false) {
                return next(ApiError.Unauthorized());
            }

            if (userData.role !== role && userData.role !== 'ADMIN') {
                return next(ApiError.Forbidden());
            }

            req.user = userData;
            next();
        } catch (e) {
            return next(ApiError.Unauthorized());
        }
    }
};