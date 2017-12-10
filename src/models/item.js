import mongoose from 'mongoose';

const Item = mongoose.model('Item', { name: String, greet: String });

export default Item;
