import {getAll,getID_User,getID_Address,save,deleteID,create} from "../models/useradresseModel.js";

async  function getAllUseraddresseAction(request, response){
    let user_address = await  getAll();
    response.json(user_address);
}
async function getUseraddresseByIdUserAction(request,response){
    let id = request.params.id;
    let user_address = await getID_User(id);
    response.json(user_address);
}
async function getUseraddresseByIdAdresseAction(request,response){
    let id = request.params.id;
    let user_address = await getID_Address(id);
    response.json(user_address);
}
async  function addUseraddresseAction(request,response){
    let object = readUseraddressFromRequest(request);
    let user_address  = await create(object);
    response.json(user_address);
}
async  function updateUseraddresseAction(request,response){
    let user_address = await save();
    response.json(user_address);
}
async  function deleteUseraddresseAction(request, response){
    let object = readUseraddressFromRequest(request);
    let user_address  = await deleteID(object);
    response.json(user_address);
}

function readUseraddressFromRequest(request){
    return {
        userID: request.body.userID,
        addressID: request.body.adresseID
    }
}
export {
    getAllUseraddresseAction,getUseraddresseByIdAdresseAction
    ,addUseraddresseAction,updateUseraddresseAction,deleteUseraddresseAction,
    getUseraddresseByIdUserAction
}
