import { getAll, getByID, removeByID, save } from "../models/addressModel.js";

async function getAllAddressesAction(request, response) {
  let addresses = await getAll();
  response.json(addresses);
}

async function getAddressByIdAction(request, response) {
  let id = request.params.id;
  let address = await getByID(id);
  response.json(address);
}

async function addAddressAction(request, response) {
  let jsonObject = readAddressFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function updateAddressAction(request, response) {
  let jsonObject = readAddressFromRequest(request);
  await save(jsonObject);
  response.json();
}

async function deleteAddressByIdAction(request, response) {
  let id = request.params.id;
  await removeByID(id);
  response.json();
}

function readAddressFromRequest(request) {
  let body = request.body;
  let adresseID = body.adresseID;
  let strasse = body.strasse;
  let hausnummer = body.hausnummer;
  let ort = body.ort;
  let plz = body.plz;
  let land = body.land;

  return {
    adresseID: adresseID,
    strasse: strasse,
    hausnummer: hausnummer,
    ort: ort,
    plz: plz,
    land: land,
  };
}

export {
  getAllAddressesAction,
  getAddressByIdAction,
  addAddressAction,
  updateAddressAction,
  deleteAddressByIdAction,
};
