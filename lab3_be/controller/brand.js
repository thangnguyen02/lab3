import { brandRepository } from '../repositories/index.js'

async function getAllBrands(req, res) {
    try {
        res.status(200).json({
            message: 'Get all brands successfully.',
            data: await brandRepository.getBrands()
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}



export default {
    getAllBrands,
}