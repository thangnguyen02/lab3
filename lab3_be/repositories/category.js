import Category from "../models/Category.js"

async function getCategory(){
    try {
        return await Category.find()
    } catch (error) {
        throw new Error(error.message)
    }
}


export default {
    getCategory,
}