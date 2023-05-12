import {Router} from "express";
import {
    addUseraddresseAction, deleteUseraddresseAction,
    getAllUseraddresseAction,
    getUseraddressByIdAdressAction,
    getUseraddresseByIdUserAction, updateUseraddresseAction
} from "../controllers/useradresseController.js";


const router = Router();
const routename = 'useradresse';

router.get(`/${routename}`,getAllUseraddresseAction);
router.get(`/${routename}/:id`,getUseraddresseByIdUserAction);
router.get(`/${routename}/address/:id`, getUseraddressByIdAdressAction);
router.post(`/${routename}`,addUseraddresseAction)
router.put(`/${routename}`,updateUseraddresseAction);
router.delete(`/${routename}`,deleteUseraddresseAction);
export{router};