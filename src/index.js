import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from '../schema'
import { resolvers } from '../resolvers';
import { users } from './models';

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    users
  },
  engine: {
    apiKey: "service:stackbuilders-demo:2rsp8mlx9qpycjQ5Nx-JOg",
  },
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 4000 }, () => {
  console.log('Apollo Server on http://localhost:4000/graphql');
});