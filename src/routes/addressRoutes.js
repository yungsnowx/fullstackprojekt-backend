import { Router } from "express";
import {
  addAddressAction,
  deleteAddressByIdAction,
  getAddressByIdAction,
  getAllAddressesAction,
  updateAddressAction,
} from "../controllers/addressController.js";

const router = Router();
const routeName = "adresse";

router.get(`/${routeName}`, getAllAddressesAction);
router.get(`/${routeName}/:id`, getAddressByIdAction);
router.post(`/${routeName}`, addAddressAction);
router.put(`/${routeName}`, updateAddressAction);
router.delete(`/${routeName}/:id`, deleteAddressByIdAction);

export { router };
