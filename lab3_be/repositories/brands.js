import Brands from "../models/Brand.js"

async function getBrands(){
    try {
        return await Brands.find()
    } catch (error) {
        throw new Error(error.message)
    }
}


export default {
    getBrands,
}