
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = {
  graphql: graphqlExpress({
    schema,
  }),
  graphiql: graphiqlExpress({
    endpointURL: '/graphql'
  })
};
