import UserModel from "./user.model.js";
import UserRepository from "./user.repository.js";
import jwt from "jsonwebtoken";
export default class UserController {

    constructor() {
        this.repository = new UserRepository();
    }

     
    async signIn(req,res){
        const {email,password} = req.body;
        try {
            const result = await this.repository.singIn(email,password);
            if(result) {
                const token = jwt.sign({userId:result._id,email:result.email},"3dda83f28c1fd9ca6ff0111c82865bfc",{expiresIn:"1h"})
                return res.status(201).send(token);
            }
        }
        catch(err) {
            throw new Error("Something went wrong while sigining");
        }
    }


    async signUp(req,res) {
        const {name,email,password} = req.body;
        console.log("Entered controller");
        const user = UserModel.signUp(name,email,password);
        console.log(user);
        try {
            const result = await this.repository.signUp(user);
            res.status(201).send(result);
        }
        catch(err) {
            throw new Error("Something went wrong while signup");
        }

    }
}