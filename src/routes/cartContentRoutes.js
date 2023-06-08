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

router.get(`/${routeName}`, getAllCartContentsAction);
router.get(`/${routeName}/:id`, getCartContentByIDAction);
router.get(`/${routeName}/warenkorb/:id`, getCartContentByCartIDAction);
router.post(`/${routeName}`, addCartContentAction);
router.put(`/${routeName}`, updateCartContentAction);
router.delete(`/${routeName}/:id`, deleteCartContentByIDAction);

export { router };
