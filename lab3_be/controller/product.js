import { productRepository } from '../repositories/index.js'

async function getAllProducts(req, res) {
    const {brand,category} = req.query;
    try {
        res.status(200).json({
            message: 'Get all products successfully.',
            data: await productRepository.getProducts({brand,category})
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

async function createProduct(req, res) {
    try {
        const {id,title, price, discount,rating,stock,brand,category, description} = req.body
        
        res.status(200).json({
            message: 'Create a new product successfully',
            data: await productRepository.createProduct({id,title,description, price, discount,rating,stock,brand,category}) 
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}
async function getProductById(req, res) {
    try {
        const { id } = req.params
        res.status(200).json({
            message: 'Get product successfully',
            data: await productRepository.getProductById(id)
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}
async function deleteProductbyID(req, res) {
    try {
        const { id } = req.params
        res.status(200).json({
            message: 'Delete product successfully',
            data: await productRepository.deleteProductbyID(id)
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

export default {
    getAllProducts,
    createProduct,deleteProductbyID,getProductById
}