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

const AddressSchema = new mongoose.Schema(
    {
        flat_no:{
            type : String,  
        },
        Landmark:{
            type : String,
        },
        district:{
            type : String,
        },
        pin_code:{
            type : Number
        },
        state:{
            type : String,
        },
        country:{
            type : String,
        }

    }
)

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
        type : [OrderIteamSchema]
    },
    Address : {
        type: [AddressSchema]
    }
}
,{timestamps : true})


export const Order = mongoose.model('Order',OrderSchema)