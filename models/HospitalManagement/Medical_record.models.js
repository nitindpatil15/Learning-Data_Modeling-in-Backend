import mongoose from 'mongoose'

const Medical_record = new mongoose.Schema(
    {

    },{timestamps : true}
)

export const Record = mongoose.model("Record",Medical_record)