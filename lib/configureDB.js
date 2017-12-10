import mongoose from 'mongoose'

export const configureDB = () => {
  mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
  mongoose.Promise = global.Promise
}
