import {getByID, getAll, removeByID, save} from '../models/cartContentModel.js'
import {getByID as getAddressByID} from "../models/addressModel.js";
import {getByID as getProductByID} from "../models/productModel.js";


async function getAllCartContentsAction(request, response) {
    let cartContent = await getAll()
    response.json(cartContent)
}

async function getCartContentByIDAction(request, response) {
    let id = request.params.id
    let cartContent = await getByID(id)

    let warenkorb = await getAddressByID(cartContent.warenkorbID)
    let produkt = await getProductByID(cartContent.produktID)

    let combinedJson = {
        'warenkorbinhaltID': cartContent.warenkorbinhaltID,
        'warenkorbID': warenkorb,
        'produktID': produkt,
        'anzahl': cartContent.anzahl
    }


    response.json(combinedJson)
}

async function addCartContentAction(request, response) {
    let jsonObject = readCartContentFromRequest(request)
    await save(jsonObject)
    response.json()
}

async function updateCartContentAction(request, response) {
    let jsonObject = readCartContentFromRequest(request)
    await save(jsonObject)
    response.json()
}

async function deleteCartContentByIDAction(request, response) {
    let id = request.params.id
    await removeByID(id)
    response.json()
}

function readCartContentFromRequest(request) {
    let body = request.body
    let warenkorbInhaltID = body.warenkorbinhaltID
    let warenkorbID = body.warenkorbID
    let userID = body.userID

    return {
        'warenkorbinhaltID': warenkorbInhaltID,
        'warenkorbID': warenkorbID,
        'userID': userID
    }
}

export {
    getAllCartContentsAction,
    getCartContentByIDAction,
    addCartContentAction,
    updateCartContentAction,
    deleteCartContentByIDAction
}
