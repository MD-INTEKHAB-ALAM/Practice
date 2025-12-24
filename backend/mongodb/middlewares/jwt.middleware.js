import jwt from "jsonwebtoken";

export default function jwtAuth(req,res,next) {
    const token = req.headers["authorization"];
    if(!authHeader) {
        return res.status(401).send("Header is empty");
    }

    try {
        const payload = jwt.verify(token,"3dda83f28c1fd9ca6ff0111c82865bfc");
    }
    catch(err) {
        return res.status(401).send("Unauthorized");
    }
    next();
}