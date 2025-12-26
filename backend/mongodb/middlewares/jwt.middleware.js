import jwt from "jsonwebtoken";

export default function jwtAuth(req,res,next) {
    const token = req.headers["authorization"];
    if(!token) {
        return res.status(401).send("Header is empty");
    }

    try {
        const payload = jwt.verify(token,"3dda83f28c1fd9ca6ff0111c82865bfc");
        req.userID = payload.userID;
    }
    catch(err) {
        return res.status(401).send("Unauthorized");
    }
    next();
}