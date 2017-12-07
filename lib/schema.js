import { buildSchema } from 'graphql'

export default buildSchema(`
type Item {
  id: String!,
  name: String!,
  greet: String!,
}

type Query {
  item(id: String!): Item,
  items: [Item]!
}

type Mutation {
  addItem(name: String!, greet: String!): Item
}
`)