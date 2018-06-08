import NodeIdentification from '../interfaces/node-identification';
import { DateTimeType } from './date-time';

const Issue = `
  """
  A application issue reported by a user
  """
  type Issue implements NodeIdentification {
    id: ID!
    rowId: ID!
    description: String
    status: String!
    reportedAt: DateTime!
  }
`;

export default () => [Issue, NodeIdentification, DateTimeType];
