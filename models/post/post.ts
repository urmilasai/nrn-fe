import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  img:{
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false,
    default: 'Santosh Basnet'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  top: {
    type: Boolean,
    default: false
  },
  trending: {
    type: Boolean,
    default: false
  }
},{
    timestamps:true
})



const Post =mongoose.models.post ||  mongoose.model('post', postSchema)

export default Post
