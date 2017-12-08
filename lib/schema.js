import { buildSchema } from 'graphql'

export default buildSchema(`
type Item {
  _id: String!,
  name: String!,
  greet: String!,
}

type Query {
  item(_id: String!): Item,
  items: [Item]!
}

type Mutation {
  addItem(name: String!, greet: String!): Item
}
`)