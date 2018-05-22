import Candidate from './types/candidate';
import Job from './types/job'
import Application from './types/application';
import QueryResolver from './resolvers/query';
import ApplicationResolver from './resolvers/application';
import NodeIdentification from './resolvers/node-identification';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

const Query = `
  type Query {
    application(id: ID!): Application
    allApplications: [Application!]!
    node(id: ID!): NodeIdentification
  }
`

const Schema = `
  schema {
    query: Query
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Schema, Query, Candidate, Job, Application],
  resolvers: { ...QueryResolver, ...ApplicationResolver, ...NodeIdentification }
});

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
