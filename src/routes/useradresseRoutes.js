import {Router} from "express";
import {
    addUseraddresseAction, deleteUseraddresseAction,
    getAllUseraddresseAction,
    getUseraddresseByIdAdresseAction,
    getUseraddresseByIdUserAction, updateUseraddresseAction
} from "../controllers/useradresseController.js";


const router = Router();
const routename = 'useradresse';

router.get(`/${routename}`,getAllUseraddresseAction);
router.get(`/${routename}/:id`,getUseraddresseByIdUserAction);
router.get(`/${routename}/address/:id`, getUseraddresseByIdAdresseAction);
router.post(`/${routename}`,addUseraddresseAction)
router.put(`/${routename}`,updateUseraddresseAction);
router.delete(`/${routename}`,deleteUseraddresseAction);
export{router};