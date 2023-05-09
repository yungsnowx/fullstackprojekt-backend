import {getCartByID, getAll, removeByID, save} from '../models/cartModel.js'

async function getAllCartsAction(request, response) {
    let cart = await getAll()
    response.json(cart)
}

async function getCartByIDAction(request, response) {
    let id = request.params.id
    let cart = await getCartByID(id)
    response.json(cart)
}

async function addCartAction(request, response) {
    let jsonObject = readOrderFromRequest(request)
    await save(jsonObject)
    response.json()
}

async function updateCartAction(request, response) {
    let jsonObject = readOrderFromRequest(request)
    await save(jsonObject)
    response.json()
}

async function deleteCartByIDAction(request, response) {
    let id = request.params.id
    await removeByID(id)
    response.json()
}

function readOrderFromRequest(request) {
    let body = request.body
    let warenkorbID = body.warenkorbID
    let userID = body.userID


    return {
        'warenkorbID': warenkorbID,
        'userID': userID
    }
}

export {
    getAllCartsAction, getCartByIDAction, addCartAction, updateCartAction, deleteCartByIDAction
}