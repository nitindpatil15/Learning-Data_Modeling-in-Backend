import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    todo:{
      ty
    }
  },{timestamps:true}
)

export const TODO = mongoose.model('TODO',todoSchema)