import {Router} from "express"
import {
    getAllOrdersAction, getOrderByIDAction, addOrderAction, updateOrderAction, deleteOrderByIDAction
} from "../controllers/orderController.js"

const router = Router()
const routename = 'bestellung'

router.get(`/${routename}`, getAllOrdersAction)
router.get(`/${routename}/:id`, getOrderByIDAction)
router.post(`/${routename}`, addOrderAction)
router.put(`/${routename}`, updateOrderAction)
router.delete(`/${routename}/:id`, deleteOrderByIDAction)

export {router}