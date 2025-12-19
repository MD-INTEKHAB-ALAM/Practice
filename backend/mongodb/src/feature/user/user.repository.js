import { getDB } from "../../../config/mongodb";

export default class UserRepository {

    async singIn(user) {
        const db = getDB();
        const collection = db.collection;
        return await collection.insertOne(user);
    }
}