import {Router} from "express"
import {
    getAllcartContentsAction, getCartContentByIDAction, addcartContentAction, updatecartContentAction, deletecartContentByIDAction
} from "../controllers/cartContentController.js"

const router = Router()
const routename = 'warenkorbInhalt'

router.get(`/${routename}`, getAllcartContentsAction)
router.get(`/${routename}/:id`, getCartContentByIDAction)
router.post(`/${routename}`, addcartContentAction)
router.put(`/${routename}`, updatecartContentAction)
router.delete(`/${routename}/:id`, deletecartContentByIDAction)

export {router}
