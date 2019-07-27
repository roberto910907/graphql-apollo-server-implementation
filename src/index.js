import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { users } from './data/user-list';
import slugify from 'slugify';

const app = express();

const schema = gql`
  type Query {
    me: User,
    users: [User!],
    user(id: ID!): User
  }

  type User {
    id: ID!,
    username: String!,
    firstname: String!,
    lastname: String!,
    fullname: String!,
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'roberto.rielo.v',
        fullname: 'Roberto Rielo',
      };
    },
    users: () => {
      return Object.values(users);
    },
    user: (parent, { id }) => {
      return users[id];
    },
  },
  User: {
    fullname: (user) => `${user.firstname} ${user.lastname}`,
    username: (user) => slugify(`${user.firstname} ${user.lastname}`, { replacement: '.', lower: true }),
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});