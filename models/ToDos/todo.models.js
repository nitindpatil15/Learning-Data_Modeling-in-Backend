import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    content:{
      tyoe :String,
      required:true
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      tyep: mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    sub_todo:[
     { type:mongoose.Schema.Types.ObjectId,
      ref:"Sub_Todo"}
    ] // Arrays Of Sub_Todos
  },{timestamps:true}
)

export const TODO = mongoose.model('TODO',todoSchema)