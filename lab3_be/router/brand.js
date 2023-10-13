import express from 'express'
import {brandController} from '../controller/index.js'

// Khai báo đối tượng Router
const brandRouter = express.Router()

brandRouter.get('/', brandController.getAllBrands)

export default brandRouter