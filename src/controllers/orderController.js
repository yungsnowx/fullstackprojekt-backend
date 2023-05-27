import { getAll, getByID, removeByID, save } from "../models/orderModel.js";
import { getByID as getAddressByID } from "../models/addressModel.js";

async function getAllOrdersAction(request, response) {
  let order = await getAll();
  response.json(order);
}

async function getOrderByIdAction(request, response) {
  let id = request.params.id;
  let order = await getByID(id);

  let lieferadresse = await getAddressByID(order.lieferadresse);
  let rechnungsadresse = await getAddressByID(order.rechnungsadresse);

  let combinedJson = {
    bestellID: order.bestellID,
    warenkorbID: order.warenkorbID,
    lieferadresse: lieferadresse,
    rechnungsadresse: rechnungsadresse,
    bezahlt: order.bezahlt,
    datum: order.datum,
  };

  response.json(combinedJson);
}

async function addOrderAction(request, response) {
  let jsonObject = readOrderFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function updateOrderAction(request, response) {
  let jsonObject = readOrderFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function deleteOrderByIdAction(request, response) {
  let id = request.params.id;
  await removeByID(id);
  response.json();
}

function readOrderFromRequest(request) {
  let body = request.body;
  let bestellID = body.bestellID;
  let warenkorbID = body.warenkorbID;
  let lieferadresse = body.lieferadresse;
  let rechnungsadresse = body.rechnungsadresse;
  let bezahlt = body.bezahlt;
  let datum = body.datum;

  return {
    bestellID: bestellID,
    warenkorbID: warenkorbID,
    lieferadresse: lieferadresse,
    rechnungsadresse: rechnungsadresse,
    bezahlt: bezahlt,
    datum: datum,
  };
}

export {
  getAllOrdersAction,
  getOrderByIdAction,
  addOrderAction,
  updateOrderAction,
  deleteOrderByIdAction,
};
