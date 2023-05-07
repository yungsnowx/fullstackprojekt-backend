import Router from 'express'
import {
    getAllProductsAction, getProductByIDAction, addProductAction, updateProductAction, deleteProductAction
} from "../controllers/productController.js";

const router = Router()
const routename = 'produkt'

router.get(`/${routename}`, getAllProductsAction)
router.get(`/${routename}/:id`, getProductByIDAction)
router.post(`/${routename}`, addProductAction)
router.put(`/${routename}`, updateProductAction)
router.delete(`/${routename}/:id`, deleteProductAction)

export {router}