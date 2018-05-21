export default () => [`
  """
  The unique person who applies for a job
  """
  type Candidate {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }
`];
