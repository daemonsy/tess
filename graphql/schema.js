import Candidate from './types/candidate';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

const Query = `
  type Query {
    candidate(id: Int!): Candidate
  }
`

const Schema = `
  schema {
    query: Query
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Schema, Query, Candidate],
  resolvers: {}
});

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
