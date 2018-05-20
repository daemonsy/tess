import Candidate from './types/candidate';
import Job from './types/job'
import Application from './types/application';
import resolvers from './resolvers';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

const Query = `
  type Query {
    application(id: Int!): Application
  }
`

const Schema = `
  schema {
    query: Query
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Schema, Query, Candidate, Job, Application],
  resolvers
});

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
