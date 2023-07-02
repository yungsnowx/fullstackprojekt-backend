import { Router } from "express";
import {
  addCartAction,
  deleteCartByIdAction,
  getAllCartsAction,
  getCartByIdAction,
  updateCartAction,
  getActiveCartByUserIdAction,
} from "../controllers/cartController.js";

const router = Router();
const routeName = "warenkorb";
import { authMiddleware } from "../middleware/fireAuth.js";

router.get(`/${routeName}`, getAllCartsAction);
router.get(`/${routeName}/:id`, getCartByIdAction);
router.get(`/${routeName}/user/:id`, getActiveCartByUserIdAction);
router.post(`/${routeName}`,authMiddleware, addCartAction);
router.put(`/${routeName}`,authMiddleware, updateCartAction);
router.delete(`/${routeName}/:id`,authMiddleware, deleteCartByIdAction);

export { router };
