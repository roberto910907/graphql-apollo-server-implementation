import { gql } from 'apollo-server-express';

export const schema = gql`
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