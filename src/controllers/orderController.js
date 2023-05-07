import {getOrderByID, getAllOrder, removeOrderByID, saveOrder} from '../models/orderModel.js'
import {getByID} from "../models/addressModel.js";

async function getAllOrdersAction(request, response) {
    let order = await getAllOrder()
    response.json(order)
}

async function getOrderByIDAction(request, response) {
    let id = request.params.id
    let order = await getOrderByID(id)
    response.json(order)
}

async function addOrderAction(request, response) {
    let jsonObject = readOrderFromRequest(request)
    await saveOrder(jsonObject)
    response.json()
}

async function updateOrderAction(request, response) {
    let jsonObject = readOrderFromRequest(request)
    await saveOrder(jsonObject)
    response.json()
}

async function deleteOrderByIDAction(request, response) {
    let id = request.params.id
    await removeOrderByID(id)
    response.json()
}

function readOrderFromRequest(request) {
    let body = request.body
    let bestellID = body.bestellID
    let warenkorbID = body.warenkorbID
    let lieferadresse = body.lieferadresse
    let rechnungsadresse = body.rechnungsadresse
    let bezahlt = body.bezahlt
    let datum = body.datum

    return {
        'bestellID': bestellID,
        'warenkorbID': warenkorbID,
        'lieferadresse': lieferadresse,
        'rechnungsadresse': rechnungsadresse,
        'bezahlt': bezahlt,
        'datum': datum
    }
}

export {
    getAllOrdersAction, getOrderByIDAction, addOrderAction, updateOrderAction, deleteOrderByIDAction
}