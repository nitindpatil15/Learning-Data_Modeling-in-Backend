import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        productImage: {
            type: String
        },
        price: {
            type: Number,
            default: 499 .RS
        },
        stock: {
            type: String,
            default: 99
        },
        category:{
            type : mongoose.Schema.Types,ObjectId, 
            ref : 'Category',
            required:true
        },
        Owner:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'USER',
            required:true
        }
    }, { timestamps: true }
)

export const Product = mongoose.model("Product", productSchema)