// @flow
import restify from 'restify';
import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify';
import { configureDB } from './configureDB';

import schema from './schema';
import rootValue from './resolvers';

const PORT: number = 3000;

const server: any = restify.createServer({
  title: 'GraphQL Server'
});

configureDB();

const graphQLOptions: { schema: {}, rootValue: {} } = { schema, rootValue };

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post('/graphql', graphqlRestify(graphQLOptions));
server.get('/graphql', graphqlRestify(graphQLOptions));

server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }));

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
