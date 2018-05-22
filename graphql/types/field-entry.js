export default () => [`
  """
  A response to a field on an application
  """
  type FieldEntry {
    id: ID!
    uuid: ID!
    type: String!
    question: String!
    answer: String
  }
`];
