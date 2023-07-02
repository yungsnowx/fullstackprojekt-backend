import Router from "express";
import { UserController } from "../controllers/userController.js";
const userController = new UserController();

const router = Router();
const routeName = "users";
import { authMiddleware } from "../middleware/fireAuth.js";
ss
router.get(`/${routeName}`, userController.getAllUsersAction);
router.get(`/${routeName}/:id`, userController.getUserByIdAction);
router.post(`/${routeName}`,authMiddleware, userController.addUserAction);
router.put(`/${routeName}`,authMiddleware, userController.updateUserAction);
router.delete(`/${routeName}/:id`,authMiddleware, userController.deleteUserByIdAction);

export { router };
