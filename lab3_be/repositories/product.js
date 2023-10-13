import Product from "../models/Product.js";

// Get all Products
async function getProducts({brand}){
    try {
        if (brand ==0)
        return await Product.find()
    else
        return await Product.find({brand:brand})
    } catch (error) {
        throw new Error(error.message)
    }
}

// Create a new Product
async function createProduct({id,title,description, price, discount,rating,stock,brand,category}){
    console.log({id,title,description, price, discount,rating,stock,brand,category})
    try {
        return await Product.create({id:id,title:title,description, price, discountPercentage:discount,rating,stock,brand,category})
    } catch (error) {
        throw new Error(error.message)
    }
}
async function getProductById(id){
    try {
        return await Product.findOne({id:id})
    } catch (error) {
        throw new Error(error.message)
    }
}
async function deleteProductbyID(id){
    try {
        return await Product.deleteOne({ id: id })
    } catch (error) {
        throw new Error(error.message)
    }
}

export default {
    getProducts,
    createProduct,getProductById,deleteProductbyID
}