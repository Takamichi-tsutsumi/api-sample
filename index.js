import restify from 'restify'
import { graphql, buildSchema } from 'graphql'

const schema = buildSchema(`
type Query {
  hello: String
}
`);

const root = { hello: () => 'Hello world!' };

const respond = async (req, res, next) => {
  const response = await graphql(schema, '{ hello }', root)
  
  res.send(response)
  next()
}


const server = restify.createServer()
server.get('/graphql', respond)
server.head('/graphql', respond)

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url)
})
