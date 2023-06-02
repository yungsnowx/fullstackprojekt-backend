import { Router } from "express";
import {
  addCartAction,
  deleteCartByIdAction,
  getAllCartsAction,
  getCartByIdAction,
  updateCartAction,
} from "../controllers/cartController.js";

const router = Router();
const routeName = "warenkorb";

router.get(`/${routeName}`, getAllCartsAction);
router.get(`/${routeName}/:id`, getCartByIdAction);
router.post(`/${routeName}`, addCartAction);
router.put(`/${routeName}`, updateCartAction);
router.delete(`/${routeName}/:id`, deleteCartByIdAction);

export { router };
