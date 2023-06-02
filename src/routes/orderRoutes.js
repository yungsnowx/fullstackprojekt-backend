import { Router } from "express";
import {
  addOrderAction,
  deleteOrderByIdAction,
  getAllOrdersAction,
  getOrderByIdAction,
  updateOrderAction,
} from "../controllers/orderController.js";

const router = Router();
const routeName = "bestellung";

router.get(`/${routeName}`, getAllOrdersAction);
router.get(`/${routeName}/:id`, getOrderByIdAction);
router.post(`/${routeName}`, addOrderAction);
router.put(`/${routeName}`, updateOrderAction);
router.delete(`/${routeName}/:id`, deleteOrderByIdAction);

export { router };
