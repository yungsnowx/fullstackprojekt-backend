import {Router} from "express"
import {
    addAdressAction, deleteAdressByIDAction, getAdressByIDAction, getAllAdressAction, updateAdressAction
} from "../controllers/addressController.js"

const router = Router()
const routename = 'adresse'

router.get(`/${routename}`, getAllAdressAction)
router.get(`/${routename}/:id`, getAdressByIDAction)
router.post(`/${routename}`, addAdressAction)
router.put(`/${routename}`, updateAdressAction)
router.delete(`/${routename}/:id`, deleteAdressByIDAction)

export {router}