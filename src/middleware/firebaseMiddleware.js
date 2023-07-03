import { getAuth } from "firebase-admin/auth";

export function firebaseVerifyToken(request, response, next) {
  const headerToken = request.headers.authorization;
  if (!headerToken) {
    response.status(401).send({ message: "No token provided" });
    return;
  }
  if (headerToken.split(" ")[0] !== "Bearer") {
    response.status(401).send({ message: "Invalid token" });
    return;
  }
  const token = headerToken.split(" ")[1];
  getAuth()
    .verifyIdToken(token)
    .then(() => next())
    .catch(() => response.status(403).send({ message: "Could not authorize" }));
}
