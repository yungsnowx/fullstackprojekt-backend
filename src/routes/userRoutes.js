import Router from 'express'
import {
    addUserAction, deleteUserByIDAction, getAllUsersAction, loginUserAction, updateUserAction
} from '../controllers/userController.js'

const router = Router()
const routename = 'users'

router.get(`/${routename}`, getAllUsersAction)
router.post(`/${routename}/log_in`, loginUserAction)
router.post(`/${routename}/sign_in`, addUserAction)
router.post(`/${routename}`, addUserAction)
router.put(`/${routename}`, updateUserAction)
router.delete(`/${routename}/:id`, deleteUserByIDAction)

export {router}