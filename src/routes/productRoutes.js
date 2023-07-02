import Router from "express";
import {
  addProductAction,
  deleteProductByIdAction,
  getAllProductsAction,
  getProductByIdAction,
  updateProductAction,
} from "../controllers/productController.js";

const router = Router();
const routeName = "produkt";
import { authMiddleware } from "../middleware/fireAuth.js";

router.get(`/${routeName}`, getAllProductsAction);
router.get(`/${routeName}/:id`, getProductByIdAction);
router.post(`/${routeName}`,authMiddleware, addProductAction);
router.put(`/${routeName}`,authMiddleware, updateProductAction);
router.delete(`/${routeName}/:id`,authMiddleware, deleteProductByIdAction);

export { router };
