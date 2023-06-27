import Router from "express";
import { UserController } from "../controllers/userController.js";
import bodyParser from "body-parser";
const userController = new UserController();
const router = Router();
const routeName = "users";
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get(`/${routeName}`, userController.getAllUsersAction);
router.get(`/${routeName}/:id`, userController.getUserByIdAction);
router.post(`/${routeName}`, userController.addUserAction);
router.put(`/${routeName}`, userController.updateUserAction);
router.delete(`/${routeName}/:id`, userController.deleteUserByIdAction);

export { router };
