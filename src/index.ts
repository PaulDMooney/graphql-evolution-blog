import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: { endpoint: 'graphql' } });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
