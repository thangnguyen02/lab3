import express from 'express'
import {categoryController} from '../controller/index.js'

// Khai báo đối tượng Router
const categoryRouter = express.Router()

categoryRouter.get('/', categoryController.getAllCategories)

export default categoryRouter