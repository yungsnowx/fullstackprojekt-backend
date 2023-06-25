import {
  getAll,
  getByID,
  removeByID,
  save
} from "../models/userModel.js";

export class UserController {
  
  async getAllUsersAction(request, response) {
    let users = await getAll();
    response.json(users);
  }
  async addUserAction(request, response) {
    let jsonObject = readUserFromRequest(request);
    jsonObject.isAdmin = false;
    await save(jsonObject);
    response.json();
  }

  async updateUserAction(request, response) {
    let jsonObject = readUserFromRequest(request);
    let updatedUser = await getByID(jsonObject.userID);
    await save(jsonObject);
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
    let isAdmin = body.isAdmin;

    return {
      userID: userID,
      vorname: vorname,
      nachname: nachname,
      isAdmin: isAdmin,
    };
  }
}
