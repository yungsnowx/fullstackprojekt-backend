import {
  getAll,
  getByAddressId,
  getByUserId,
  removeByIDs,
  save,
} from "../models/userAddressModel.js";
import { getByID as getUserById } from "../models/userModel.js";
import { getByID as getAddressById } from "../models/addressModel.js";

async function getAllUserAddressAction(request, response) {
  let userAddresses = await getAll();
  response.json(userAddresses);
}

async function getUserAddressByUserIdAction(request, response) {
  let id = request.params.id;
  let userAddress = await getByUserId(id);
  let address = await getAddressById(userAddress.adresseID);
  const res = {
    userID: id,
    addressID: address,
  };
  response.json(res);
}

async function getUserAddressByAddressIdAction(request, response) {
  let id = request.params.id;
  let userAddress = await getByAddressId(id);
  let user = await getUserById(userAddress.userID);
  const res = {
    userID: user,
    addressID: id,
  };
  response.json(res);
}

async function addUserAddressAction(request, response) {
  let jsonObject = readUserAddressFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function updateUserAddressAction(request, response) {
  let jsonObject = readUserAddressFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function deleteUserAddressAction(request, response) {
  let jsonObject = readUserAddressFromRequest(request);
  let userId = jsonObject.userID;
  let addressId = jsonObject.addressID;
  await removeByIDs(userId, addressId);
  response.json();
}

function readUserAddressFromRequest(request) {
  return {
    userID: request.body.userID,
    addressID: request.body.adresseID,
  };
}

export {
  getAllUserAddressAction,
  getUserAddressByAddressIdAction,
  addUserAddressAction,
  updateUserAddressAction,
  deleteUserAddressAction,
  getUserAddressByUserIdAction,
};
