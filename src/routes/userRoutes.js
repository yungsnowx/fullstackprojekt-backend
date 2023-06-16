import Router from "express";
import {
  userControler
} from "../controllers/userController.js";
import bodyParser from "body-parser";
const UserControler = new userControler()
const router = Router();
const routeName = "users";
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get(`/${routeName}`, UserControler.getAllUsersAction);
router.post(`/${routeName}/log_in`, UserControler.loginUserAction);
router.post(`/${routeName}/sign_in`, UserControler.addUserAction);
router.post(`/${routeName}`, UserControler.addUserAction);
router.put(`/${routeName}`, UserControler.updateUserAction);
router.delete(`/${routeName}/:id`, UserControler.deleteUserByIdAction);

export { router };
