import {getCartContentByID, getAll, removeByID, save} from '../models/cartContentModel.js'

async function getAllcartContentsAction(request, response) {
    let cartContent = await getAll()
    response.json(cartContent)
}

async function getCartContentByIDAction(request, response) {
    let id = request.params.id
    let cartContent = await getCartContentByID(id)
    response.json(cartContent)
}

async function addcartContentAction(request, response) {
    let jsonObject = readOrderFromRequest(request)
    await save(jsonObject)
    response.json()
}

async function updatecartContentAction(request, response) {
    let jsonObject = readOrderFromRequest(request)
    await save(jsonObject)
    response.json()
}

async function deletecartContentByIDAction(request, response) {
    let id = request.params.id
    await removeByID(id)
    response.json()
}

function readOrderFromRequest(request) {
    let body = request.body
    let warenkorbInhaltID = body.warenkorbInhaltID
    let userID = body.userID


    return {
        'warenkorbInhaltID': warenkorbInhaltID,
        'userID': userID
    }
}

export {
    getAllcartContentsAction, getCartContentByIDAction, addcartContentAction, updatecartContentAction, deletecartContentByIDAction
}
