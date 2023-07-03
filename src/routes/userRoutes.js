import Router from "express";
import { UserController } from "../controllers/userController.js";
import { firebaseVerifyToken } from "../middleware/firebaseMiddleware.js";
const userController = new UserController();

const router = Router();
const routeName = "users";

router.get(`/${routeName}`, userController.getAllUsersAction);
router.get(`/${routeName}/:id`, userController.getUserByIdAction);
router.post(`/${routeName}`, firebaseVerifyToken, userController.addUserAction);
router.put(
  `/${routeName}`,
  firebaseVerifyToken,
  userController.updateUserAction
);
router.delete(
  `/${routeName}/:id`,
  firebaseVerifyToken,
  userController.deleteUserByIdAction
);

export { router };
