import { getDB } from "../../../config/mongodb";

export default class UserRepository {

    async singIn(user) {
        const db = getDB();
        const collection = db.collection;
        // return await collection.insertOne(user);
    }

    async signUp(user) {
        const db = getDB();
        const collection = db.collection;
        try {
            return await collection.insertOne(user);
        }
        catch(err) {
            throw new Error("Something wend wrong while inserting user in db");
        }
    }
}