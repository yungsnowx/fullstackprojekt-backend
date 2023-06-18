import Router from "express";
import { userController } from "../controllers/userController.js";
import bodyParser from "body-parser";
const UserController = new userController();
const router = Router();
const routeName = "users";
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get(`/${routeName}`, UserController.getAllUsersAction);
router.post(`/${routeName}/log_in`, UserController.loginUserAction);
router.post(`/${routeName}/sign_in`, UserController.addUserAction);
router.post(`/${routeName}`, UserController.addUserAction);
router.put(`/${routeName}`, UserController.updateUserAction);
router.delete(`/${routeName}/:id`, UserController.deleteUserByIdAction);

export { router };
