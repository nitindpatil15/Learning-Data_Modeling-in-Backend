import mongoose from 'mongoose'

const HospitalSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required: true
        },
        addressLine1:{
            type : String,
        },
        addressLine2:{
            type : String,
        },
        City:{
            type : String,
        },
        pin_code:{
            type : Number
        },
        SpecializedIn:{
            type : String,
            required:true
        }
    },{timestamps : true}
)

export const Hospital = mongoose.model("Hospital",HospitalSchema)