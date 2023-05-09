import {getByID, getAll, removeByID, save} from '../models/addressModel.js'

async function getAllAdressAction(request, response) {
    let adress = await getAll()
    response.json(adress)
}

async function getAdressByIDAction(request, response) {
    let id = request.params.id
    let adress = await getByID(id)
    response.json(adress)
}

async function addAdressAction(request, response) {
    let jsonObject = readAdressFromRequest(request)
    await save(jsonObject)
    response.json()
}

async function updateAdressAction(request, response) {
    let jsonObject = readAdressFromRequest(request)
    await save(jsonObject)
    response.json()
}

async function deleteAdressByIDAction(request, response) {
    let id = request.params.id
    await removeByID(id)
    response.json()
}

function readAdressFromRequest(request) {
    let body = request.body
    let adresseID = body.adresseID
    let strasse = body.strasse
    let hausnummer = body.hausnummer
    let ort = body.ort
    let plz = body.plz
    let land = body.land

    return {
        'adresseID': adresseID,
        'strasse': strasse,
        'hausnummer': hausnummer,
        'ort': ort,
        'plz': plz,
        'land': land
    }
}

export {
    getAllAdressAction, getAdressByIDAction, addAdressAction, updateAdressAction, deleteAdressByIDAction
}