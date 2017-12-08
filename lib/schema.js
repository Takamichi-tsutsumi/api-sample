import { buildSchema } from 'graphql'

export default buildSchema(`
input ItemFields {
  name: String!,
  greet: String
}

type Item {
  _id: String!,
  name: String!,
  greet: String,
}

type Query {
  item(_id: String!): Item,
  items: [Item]!
}

type Mutation {
  createItem(name: String!, greet: String): Item,
  updateItem(_id: String!, params: ItemFields): Item,
  deleteItem(_id: String!): Boolean,
}
`)