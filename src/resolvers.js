import { Item } from './models';

export default {
  // Query
  item: async ({ _id }) => {
    const item = await Item.findById(_id);
    return item;
  },
  items: async () => {
    const items = await Item.find();
    return items;
  },

  // Mutation
  createItem: async ({ name, greet }) => {
    const item = new Item({ name, greet });
    return await item.save();
  },
  updateItem: async ({ _id, params }) => {
    return await Item.findByIdAndUpdate(_id, { $set: params }, { new: true });
  },
  deleteItem: async ({ _id }) => {
    const item = await Item.findById(_id);
    if (!item) {
      throw new Error(`No Item with id: ${_id}`);
    }

    return await Item.remove();
  }
};
