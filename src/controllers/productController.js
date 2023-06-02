import { getAll, getByID, removeByID, save } from "../models/productModel.js";

async function getAllProductsAction(request, response) {
  let product = await getAll();
  response.json(product);
}

async function getProductByIdAction(request, response) {
  let id = request.params.id;
  let product = await getByID(id);
  response.json(product);
}

async function addProductAction(request, response) {
  let jsonObject = readProductFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function updateProductAction(request, response) {
  let jsonObject = readProductFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function deleteProductByIdAction(request, response) {
  let id = request.params.id;
  await removeByID(id);
  response.json();
}

function readProductFromRequest(request) {
  let body = request.body;
  let produktID = body.produktID;
  let produktname = body.produktname;
  let produktbeschreibung = body.produktbeschreibung;
  let preis = body.preis;
  let bild = body.bild;

  return {
    produktID: produktID,
    produktname: produktname,
    produktbeschreibung: produktbeschreibung,
    preis: preis,
    bild: bild,
  };
}

export {
  getAllProductsAction,
  getProductByIdAction,
  addProductAction,
  updateProductAction,
  deleteProductByIdAction,
};
