
export default class UserModel {

    constructor(name,email,password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static signUp(name,email,password) {
        return new UserModel(name,email,password);
    }
}