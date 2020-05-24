import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});
const server = new ApolloServer({
  schema,
  introspection: true,
  playground: { endpoint: 'graphql' },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
