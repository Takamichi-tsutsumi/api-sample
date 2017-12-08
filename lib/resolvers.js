import mongoose, { Types } from 'mongoose'

mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
mongoose.Promise = global.Promise

const Item = mongoose.model('Item', { name: String, greet: String })


export default {
  // Query
  item: async ({ _id }) => {
    const item = await Item.findById(_id)
    return item
  },
  items: async () => {
    const items = await Item.find()
    return items
  },

  // Mutation
  createItem: async ({ name, greet }) => {
    const item = new Item({ name, greet })
    return await item.save()
  },
  updateItem: async ({ _id, params }) => {
    return await Item.findByIdAndUpdate(_id, { $set: params }, { new: true })
  },
  deleteItem: async ({ _id }) => {
    try {
      const removed = await Item.remove({ _id })
      return true
    } catch (e) {
      return false
    }
  }
}