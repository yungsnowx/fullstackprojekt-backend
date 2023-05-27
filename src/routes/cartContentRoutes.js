import { Router } from "express";
import {
  addCartContentAction,
  deleteCartContentByIDAction,
  getAllCartContentsAction,
  getCartContentByIDAction,
  updateCartContentAction,
} from "../controllers/cartContentController.js";

const router = Router();
const routeName = "warenkorbinhalt";

router.get(`/${routeName}`, getAllCartContentsAction);
router.get(`/${routeName}/:id`, getCartContentByIDAction);
router.post(`/${routeName}`, addCartContentAction);
router.put(`/${routeName}`, updateCartContentAction);
router.delete(`/${routeName}/:id`, deleteCartContentByIDAction);

export { router };
