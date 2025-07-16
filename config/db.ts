import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    process.exit(1)
  }
}

export default connectToDatabase

