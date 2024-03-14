import mongoose from 'mongoose';

const DocterSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        Salary:{
            type:Number,
            required:true
        },
        Qualification:{
            type:String,
            required:true
        },
        ExperienceOfYears:{
            type:Number,
            default:0
        },
        WorkInHospitals:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }]
    },{timestamps : true}
)

export const Docter = mongoose.model("Docter",DocterSchema)