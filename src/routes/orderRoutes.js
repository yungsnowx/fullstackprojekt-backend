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
import { authMiddleware } from "../middleware/fireAuth.js";

router.get(`/${routeName}`, getAllOrdersAction);
router.get(`/${routeName}/:id`, getOrderByIdAction);
router.post(`/${routeName}`,authMiddleware, addOrderAction);
router.put(`/${routeName}`,authMiddleware, updateOrderAction);
router.delete(`/${routeName}/:id`,authMiddleware, deleteOrderByIdAction);

export { router };
