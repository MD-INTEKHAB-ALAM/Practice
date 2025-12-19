
export default class UserModel {

    constructor(name,email,password,confirmPassword) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    static signIn(name,email,password,confirmPassword) {
        const user = new UserModel(name,email,password,confirmPassword);
        return user;
    }
}