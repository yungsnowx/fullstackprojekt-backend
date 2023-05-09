import {Router} from "express"
import {
    getAllCartsAction, getCartByIDAction, addCartAction, updateCartAction, deleteCartByIDAction
} from "../controllers/cartController.js"

const router = Router()
const routename = 'warenkorb'

router.get(`/${routename}`, getAllCartsAction)
router.get(`/${routename}/:id`, getCartByIDAction)
router.post(`/${routename}`, addCartAction)
router.put(`/${routename}`, updateCartAction)
router.delete(`/${routename}/:id`, deleteCartByIDAction)

export {router}