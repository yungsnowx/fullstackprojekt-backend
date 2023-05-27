import { Router } from "express";
import {
  addUserAddressAction,
  deleteUserAddressAction,
  getAllUserAddressAction,
  getUserAddressByAddressIdAction,
  getUserAddressByUserIdAction,
  updateUserAddressAction,
} from "../controllers/userAddressController.js";

const router = Router();
const routename = "useradresse";

router.get(`/${routename}`, getAllUserAddressAction);
router.get(`/${routename}/user/:id`, getUserAddressByUserIdAction);
router.get(`/${routename}/address/:id`, getUserAddressByAddressIdAction);
router.post(`/${routename}`, addUserAddressAction);
router.put(`/${routename}`, updateUserAddressAction);
router.delete(`/${routename}`, deleteUserAddressAction);

export { router };
