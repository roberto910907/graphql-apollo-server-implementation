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
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});