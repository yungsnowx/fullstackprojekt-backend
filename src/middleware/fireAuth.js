import {getAuth} from "firebase-admin/auth";

export function authMiddleware(request,response,next){
    const headerToken = request.headers.authorization;
    console.log(headerToken)
    if(!headerToken){
        return response.send({message:"No token Provided"}).status(401);
    }

    if(headerToken && headerToken.split(" ")[0] !== "Bearer"){
        response.send({message: "invalid token"}).status(401);
    }
    const token = headerToken.split(" ")[1];
    getAuth()
    .verifyIdToken(token)
    .then(
        () => next()
    )
    .catch(
        () => response.send({message: "Could not authorize"}).status(403)
    )
}