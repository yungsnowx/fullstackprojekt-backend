import Router from "express";
import {
  addUserAction,
  deleteUserByIdAction,
  getAllUsersAction,
  loginUserAction,
  updateUserAction,
} from "../controllers/userController.js";
import bodyParser from "body-parser";

const router = Router();
const routeName = "users";
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get(`/${routeName}`, getAllUsersAction);
router.post(`/${routeName}/log_in`, loginUserAction);
router.post(`/${routeName}/sign_in`, addUserAction);
router.post(`/${routeName}`, addUserAction);
router.put(`/${routeName}`, updateUserAction);
router.delete(`/${routeName}/:id`, deleteUserByIdAction);

export { router };
