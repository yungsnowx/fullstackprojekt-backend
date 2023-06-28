import {getAll, getByID, removeByID, save, getActiveByUserId} from "../models/cartModel.js";
import {getAuth} from "firebase-admin/auth";

async function getAllCartsAction(request, response) {
  let carts = await getAll();
  response.json(carts);
}

async function getCartByIdAction(request, response) {
  let id = request.params.id;
  let cart = await getByID(id);
  response.json(cart);
}

export async function getActiveCartByUserIdAction(request, response) {
  let id = request.params.id;
  let cart = await getActiveByUserId(id);
  response.json(cart);
}


async function addCartAction(request, response) {
  if (!hasToken(request.headers.authorization)) {
    response.status(403).send("Unauthorized");
    return;
  }
  let jsonObject = readCartFromRequest(request);
  const token = request.headers.authorization.split(" ")[1];
  getAuth()
    .verifyIdToken(token)
    .then(async (user) => {
      jsonObject.userID = user.uid;
      await save(jsonObject);
      response.json();
    }).catch((error) => {
      response.send(error);
    }
  );
}

async function updateCartAction(request, response) {
  if (!hasToken(request.headers.authorization)) {
    response.status(403).send("Unauthorized");
    return;
  }
  let jsonObject = readCartFromRequest(request);
  const token = request.headers.authorization.split(" ")[1];
  getAuth()
    .verifyIdToken(token)
    .then(async (user) => {
      jsonObject.userID = user.uid;
      await save(jsonObject);
      response.json();
    }).catch((error) => {
      response.send(error);
    }
  );
}

async function deleteCartByIdAction(request, response) {
  let id = request.params.id;
  await removeByID(id);
  response.json();
}

function readCartFromRequest(request) {
  let body = request.body;
  let warenkorbID = body.warenkorbID;
  let userID = body.userID;
  let istAktiv = body.istAktiv;

  return {
    warenkorbID: warenkorbID,
    userID: userID,
    istAktiv: istAktiv,
  };
}

function hasToken(headerAuthorization) {
  return !headerAuthorization || !headerAuthorization.startsWith("Bearer ")
}

export {
  getAllCartsAction,
  getCartByIdAction,
  addCartAction,
  updateCartAction,
  deleteCartByIdAction,
};
