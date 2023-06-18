module.exports = class UserDto {
    id;
    role;
    email;
    isActivated;

    constructor(model) {
        this.id = model.id;
        this.email = model.email;
        this.role = model.role;
        this.isActivated = model.isActivated;
    }
}