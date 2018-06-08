import Issue from './types/issue';
import QueryResolver from './resolvers/query';
import IssueResolver from './resolvers/issue';
import NodeIdentification from './resolvers/node-identification';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

const Query = `
  type Query {
    allIssues: [Issue!]!,
    node(id: ID!): NodeIdentification
  }
`

const Schema = `
  schema {
    query: Query
  }
`

const schema = makeExecutableSchema({
  typeDefs: [Schema, Query, Issue],
  resolvers: { ...QueryResolver, ...IssueResolver, ...NodeIdentification }
});

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
