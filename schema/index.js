import gql from 'graphql-tag';

export const schema = gql`
  type Query {
    me: User,
    users(limit: Int): [User!],
    user(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, name: String!, firstname: String!, lastname: String!): User
  }

  type User {
    id: ID!,
    username: String!,
    firstname: String!,
    lastname: String!,
    name: String!,
    friends: [User!]
  }
`;