import mongoose from 'mongoose'

const patient = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        DiagonseWith:{
            type:String,
            required:true
        },
        Address:{
            type:String,
            required:true
        },
        BloodGroup:{
            type:String,
            enum : ['A+',"B+","O+","AB+","AB-","O-","B-","A-"],
            required:true
        },
        Gender:{
            type:String,
            enum:[male,female,other],
            required:true
        },
        Age:{
            type:Number,
            required:true
        },
        AddmitedIn:{
            type : mongoose.Schema.Types.ObjectId ,
            ref : "Hospital"
        }
    },
    { timestamps: true })

export const Patient = mongoose.model("Patient", patient)