import mongoose from 'mongoose'

const productSchema = new mongoose.schema(
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
            type: string
        },
        price: {
            type: Number,
            default: 499 .RS
        },
        stock: {
            type: string,
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