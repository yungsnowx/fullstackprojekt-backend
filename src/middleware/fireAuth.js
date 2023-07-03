import {getAuth} from "firebase-admin/auth";

export function authMiddleware(request,response,next){
    const headerToken = request.headers.authorization;
    if(!headerToken){
        return response.status(401).send({message:"No token Provided"});
    }

    if(headerToken && headerToken.split(" ")[0] !== "Bearer"){
        response.status(401).send({message: "invalid token"});
    }
    const token = headerToken.split(" ")[1];
    getAuth()
    .verifyIdToken(token)
    .then(
        () => next()
    )
    .catch(
        () => response.status(403).send({message: "Could not authorize"})
    )
}