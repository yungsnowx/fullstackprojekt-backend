import {getAll,getByID_User,getByID_Address,save,deleteID,create} from "../models/useradresseModel.js";
import {getByID as get_id} from "../models/userModel.js";
import {getByID} from "../models/addressModel.js";

async  function getAllUseraddresseAction(request, response){
    let user_address = await  getAll();
    response.json(user_address);
}
async function getUseraddresseByIdUserAction(request,response){

    let id = request.params.id;
    let user_address = await getByID_Address(id);
    let address = await  getByID(user_address.adresseID)
    const res ={
        "userID": id,
        "addressID": address
    }

    response.json(res);
}
async function getUseraddressByIdAdressAction(request, response){

    let id = request.params.id;
    let user_address = await getByID_User(id);
    let user = await  get_id(user_address.userID)
    const res = {
        "userID": user,
        "addressID":id
    }
    response.json(res);
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
    getAllUseraddresseAction,getUseraddressByIdAdressAction
    ,addUseraddresseAction,updateUseraddresseAction,deleteUseraddresseAction,
    getUseraddresseByIdUserAction
}
