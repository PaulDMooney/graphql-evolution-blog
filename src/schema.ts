import { gql } from 'apollo-server';

export const typeDefs = gql`

  type Author {
    firstName: String
    lastName: String
  }

  interface IBook {
    title: String
  }

  type Book implements IBook {
    title: String
    author: String
  }

  type BookV2 implements IBook {
    title: String
    author: Author
  }

  enum BookVersions {
    v1
    v2
  }

  type Query {
    books(version: String): [IBook]
  }
`;
