import { Router } from "express";
import {
  addAddressAction,
  deleteAddressByIdAction,
  getAddressByIdAction,
  getAllAddressesAction,
  updateAddressAction,
} from "../controllers/addressController.js";
import { authMiddleware } from "../middleware/fireAuth.js";
const router = Router();
const routeName = "adresse";

router.get(`/${routeName}`, getAllAddressesAction);
router.get(`/${routeName}/:id`, getAddressByIdAction);
router.post(`/${routeName}`,authMiddleware, addAddressAction);
router.put(`/${routeName}`,authMiddleware, updateAddressAction);
router.delete(`/${routeName}/:id`,authMiddleware, deleteAddressByIdAction);

export { router };
