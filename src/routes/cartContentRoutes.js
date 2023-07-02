import { Router } from "express";
import {
  addCartContentAction,
  deleteCartContentByIDAction,
  getAllCartContentsAction,
  getCartContentByCartIDAction,
  getCartContentByIDAction,
  updateCartContentAction,
} from "../controllers/cartContentController.js";

const router = Router();
const routeName = "warenkorbinhalt";
import { authMiddleware } from "../middleware/fireAuth.js";

router.get(`/${routeName}`, getAllCartContentsAction);
router.get(`/${routeName}/:id`, getCartContentByIDAction);
router.get(`/${routeName}/warenkorb/:id`, getCartContentByCartIDAction);
router.post(`/${routeName}`,authMiddleware, addCartContentAction);
router.put(`/${routeName}`,authMiddleware, updateCartContentAction);
router.delete(`/${routeName}/:id`,authMiddleware, deleteCartContentByIDAction);

export { router };
