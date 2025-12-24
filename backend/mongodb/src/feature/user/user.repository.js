import { getDB } from "../../../config/mongodb.js";

export default class UserRepository {

    async singIn(email,password) {
        const db = getDB();
        const collection = db.collection("users");
        try {
            return await collection.find({email,password});
        }
        catch(err) {
            throw new Error("Something went wrong while signin in db");
        }
    }

    async signUp(user) {
        const db = getDB();
        const collection = db.collection("users");
        try {
            return await collection.insertOne(user);
        }
        catch(err) {
            throw new Error("Something wend wrong while inserting user in db");
        }
    }
}