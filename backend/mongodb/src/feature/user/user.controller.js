import UserModel from "./user.model";
import UserRepository from "./user.repository";
export default class UserController {

    constructor() {
        this.repository = new UserRepository();
    }

     
    async singIn(req,res){

        const {name,email,password,confirmPassword} = req.body;
        const user = UserModel.signIn(name,email,password,confirmPassword);

        try {
            const result = await this.repository.singIn(user);
            return res.status(201).send(result);
        }
        catch(err) {
            throw new Error("Something went wrong while sigining");
        }
    }
}