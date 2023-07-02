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
import { authMiddleware } from "../middleware/fireAuth.js";

router.get(`/${routename}`, getAllUserAddressAction);
router.get(`/${routename}/user/:id`, getUserAddressByUserIdAction);
router.get(`/${routename}/address/:id`, getUserAddressByAddressIdAction);
router.post(`/${routename}`,authMiddleware, addUserAddressAction);
router.put(`/${routename}`,authMiddleware, updateUserAddressAction);
router.delete(`/${routename}`,authMiddleware, deleteUserAddressAction);

export { router };
