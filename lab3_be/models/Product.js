import mongoose, {ObjectId, Schema} from "mongoose"

const Product = mongoose.model("Product", new Schema({
    _id: ObjectId,
    id:{
        type: Number,
        required: true,
        
    },
    title: {
        type: String,
        required: true,
        validate: {
            validator: value => value.length > 3,
            message: 'Length of title must be greater than 3 characters.'
        }
    },
    description: {
        type: String,
        required: false,    
    },
    price: {
        type: Number,
        required: true,
        validate:{
            validator: value => value > 0,
            message: 'Price must be greater than 0'
        }
    },
    discountPercentage:{
        type: Number,
        required: false
    },
    rating:{
        type: Number,
        required: false
    },
    stock:{
        type: Number,
        required: false
    },
    brand:{
        type: Number,
        required: false
    },
    category:{
        type: Number,
        required: false
    }
},
    {
        timestamps: true
    }
))

export default Product
