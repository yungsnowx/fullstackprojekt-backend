import {
  getAll, getByID, removeByID, save
} from "../models/userModel.js";
import {readUserFromRequest} from "../utils/requestUtil.js";

export class UserController {
  async getAllUsersAction(request, response) {
    let users = await getAll();
    response.json(users);
  }

  async getUserByIdAction(request, response) {
    let id = request.params.id;
    let user = await getByID(id);
    response.json(user);
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
}
