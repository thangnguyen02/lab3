import { categoryRepository } from '../repositories/index.js'

async function getAllCategories(req, res) {
    try {
        res.status(200).json({
            message: 'Get all categories successfully.',
            data: await categoryRepository.getCategory()
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}



export default {
    getAllCategories,
}