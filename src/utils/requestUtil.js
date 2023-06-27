/**
 * Liest die Daten aus dem Request aus und gibt sie als Objekt zurück
 * Kann nicht in userController sein, weil es wegen export class UserController nicht ausgeführt werden kann
 * @param request
 * @returns {{userID: string, vorname: string, nachname: string, isAdmin: number}}
 */
function readUserFromRequest(request) {
    let body = request.body;
    let userID = body.userID;
    let vorname = body.vorname;
    let nachname = body.nachname;
    let isAdmin = body.isAdmin;

    return {
        userID: userID,
        vorname: vorname,
        nachname: nachname,
        isAdmin: isAdmin,
    };
}

export {
    readUserFromRequest
}