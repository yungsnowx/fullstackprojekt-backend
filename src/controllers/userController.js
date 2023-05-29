import {getAll, getByEmail, removeByID, save, saveWithoutPassword,} from "../models/userModel.js";
import bcrypt from "bcrypt";

async function getAllUsersAction(request, response) {
    let users = await getAll();
    response.json(users);
}

async function getUserByEmailAction(request, response) {
    let email = request.body.email;
    let user = await getByEmail(email);
    response.json(user);
}

async function loginUserAction(request, response) {
    let email = request.body.email;
    let user = await getByEmail(email);

    if (bcrypt.compareSync(user.passwort, request.body.passwort)) {
        response.status(201).json({message: "Success"});
    } else {
        response.status(401).json({message: "passwort not correct"});
    }
}

async function addUserAction(request, response) {
    let jsonObject = readUserFromRequest(request);

    jsonObject.passwort = bcrypt.hashSync(jsonObject.passwort, 10);
    jsonObject.isAdmin = false;

    await save(jsonObject);
    response.json();
}

async function updateUserAction(request, response) {
    let jsonObject = readUserFromRequest(request);
    let updatedUser = await getByEmail(jsonObject.email);
    await saveWithoutPassword(jsonObject);
    response.send(updatedUser);
}

async function deleteUserByIdAction(request, response) {
    let id = request.params.id;
    await removeByID(id);
    response.json();
}

function readUserFromRequest(request) {
    let body = request.body;
    let userID = body.userID;
    let vorname = body.vorname;
    let nachname = body.nachname;
    let email = body.email;
    let passwort = body.passwort;
    let isAdmin = body.isAdmin;

    return {
        userID: userID,
        vorname: vorname,
        nachname: nachname,
        email: email,
        passwort: passwort,
        isAdmin: isAdmin,
    };
}

export {
    getAllUsersAction,
    getUserByEmailAction,
    loginUserAction,
    addUserAction,
    updateUserAction,
    deleteUserByIdAction,
};
