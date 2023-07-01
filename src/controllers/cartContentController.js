import {
  create,
  getAll,
  getByCartId,
  getByID,
  removeByID,
  save
} from "../models/cartContentModel.js";

async function getAllCartContentsAction(request, response) {
  let cartContent = await getAll();
  response.json(cartContent);
}

async function getCartContentByIDAction(request, response) {
  let id = request.params.id;
  let cartContent = await getByID(id);
  response.json(cartContent);
}

async function getCartContentByCartIDAction(request, response) {
  let id = request.params.id;
  let cartContent = await getByCartId(id);
  response.json(cartContent);
}

async function addCartContentAction(request, response) {
  let jsonObject = readCartContentFromRequest(request);
  let cartContent = await create(jsonObject);
  response.json(cartContent)
}

async function updateCartContentAction(request, response) {
  let jsonObject = readCartContentFromRequest(request);
  let cartContent = await save(jsonObject);
  response.json(cartContent);
}

async function deleteCartContentByIDAction(request, response) {
  let id = request.params.id;
  await removeByID(id);
  response.json();
}

function readCartContentFromRequest(request) {
  let body = request.body;
  let warenkorbInhaltID = body.warenkorbinhaltID;
  let warenkorbID = body.warenkorbID;
  let produktID = body.produktID;
  let anzahl = body.anzahl;

  return {
    warenkorbinhaltID: warenkorbInhaltID,
    warenkorbID: warenkorbID,
    produktID: produktID,
    anzahl: anzahl
  };
}

export {
  getAllCartContentsAction,
  getCartContentByIDAction,
  getCartContentByCartIDAction,
  addCartContentAction,
  updateCartContentAction,
  deleteCartContentByIDAction,
};
