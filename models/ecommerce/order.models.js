import mongoose from 'mongoose'

const OrderIteamSchema = new mongoose.Schema({
    ProductId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    },
    quantity :{
        type : number
    }
})

const OrderSchema = new mongoose.Schema({
    orderPrice:{
        type : Number,
        required : true
    },
    customer:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'USER'
    },
    orderIteams:{
        type : {OrderIteamSchema}
    }
}
,{timestamps : true})


export const Order = mongoose.model('Order',OrderSchema)