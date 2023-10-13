import mongoose, {ObjectId, Schema} from "mongoose"

const Brands = mongoose.model("Brands", new Schema({
    _id: ObjectId,
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        validate:{
            validator: value => value.length > 5,
            message: 'Length of Name must be greater than 5'
        }
    }
   
},
    {
        timestamps: true
    }
))

export default Brands
