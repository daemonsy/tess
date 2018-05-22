import NodeIdentification from '../interfaces/node-identification';

const Candidate = `
  """
  The unique person who applies for a job
  """
  type Candidate implements NodeIdentification {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }
`;

export default () => [Candidate, NodeIdentification];
