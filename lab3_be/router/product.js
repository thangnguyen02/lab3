import express from 'express'
import {productController} from '../controller/index.js'

// Khai báo đối tượng Router
const productRouter = express.Router()

productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', productController.getProductById)
productRouter.post('/', productController.createProduct)
productRouter.delete('/:id', productController.deleteProductbyID)


export default productRouter