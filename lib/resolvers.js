import mongoose, { Types } from 'mongoose'

mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
mongoose.Promise = global.Promise

const Item = mongoose.model('Item', { name: String, greet: String })


export default {
  item: async ({ _id }) => {
    const item = await Item.findById(_id)
    return item
  },
  items: async () => {
    const items = await Item.find()
    return items
  },
  addItem: async ({ name, greet }) => {
    const item = new Item({ name, greet })
    return await item.save()
  }
}