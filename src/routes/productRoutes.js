import Router from 'express'
import {
    getAllProductsAction,
    getProductByIdAction,
    addProductAction,
    updateProductAction,
    deleteProductByIdAction
} from "../controllers/productController.js"

const router = Router()
const routeName = 'produkt'

router.get(`/${routeName}`, getAllProductsAction)
router.get(`/${routeName}/:id`, getProductByIdAction)
router.post(`/${routeName}`, addProductAction)
router.put(`/${routeName}`, updateProductAction)
router.delete(`/${routeName}/:id`, deleteProductByIdAction)

export {router}