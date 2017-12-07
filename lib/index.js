import restify from 'restify'
import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify'

import schema from './schema'
import rootValue from './resolvers'

const PORT = 3000

const server = restify.createServer({
  title: 'GraphQL Server'
})

const graphQLOptions = { schema, rootValue }

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

server.post('/graphql', graphqlRestify(graphQLOptions))
server.get('/graphql', graphqlRestify(graphQLOptions))

server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }))

server.listen(PORT, () => console.log(`Listening on ${PORT}`))