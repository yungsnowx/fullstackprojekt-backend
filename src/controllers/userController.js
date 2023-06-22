import {
  getAll,
  getByEmail,
  removeByID,
  save,
  saveWithoutPassword,
} from "../models/userModel.js";
import bcrypt from "bcrypt";

export class UserController {
  userController() {}
  async getAllUsersAction(request, response) {
    let users = await getAll();
    response.json(users);
  }

  async getUserByEmailAction(request, response) {
    let email = request.body.email;
    let user = await getByEmail(email);
    response.json(user);
  }

  async loginUserAction(request, response) {
    let email = request.body.email;
    let user = await getByEmail(email);
    //bcrypt.compareSync(user.passwort, request.body.passwort)
    if (user.passwort === request.body.passwort) {
      response.status(201).json(user);
    } else {
      response.status(401).json({ message: "passwort not correct" });
    }
  }

  async addUserAction(request, response) {
    let jsonObject = readUserFromRequest(request);

    jsonObject.passwort = bcrypt.hashSync(jsonObject.passwort, 10);
    jsonObject.isAdmin = false;

    await save(jsonObject);
    response.json();
  }

  async updateUserAction(request, response) {
    let jsonObject = readUserFromRequest(request);
    let updatedUser = await getByEmail(jsonObject.email);
    await saveWithoutPassword(jsonObject);
    response.send(updatedUser);
  }

  async deleteUserByIdAction(request, response) {
    let id = request.params.id;
    await removeByID(id);
    response.json();
  }

  readUserFromRequest(request) {
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
}
