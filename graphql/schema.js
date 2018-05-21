import Candidate from './types/candidate';
import Job from './types/job'
import Application from './types/application';
import QueryResolver from './resolvers/query';
import ApplicationResolver from './resolvers/application';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

const Query = `
  type Query {
    application(id: ID!): Application
    allApplications: [Application!]!
  }
`

const Schema = `
  schema {
    query: Query
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Schema, Query, Candidate, Job, Application],
  resolvers: { ...QueryResolver, ...ApplicationResolver }
});

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
