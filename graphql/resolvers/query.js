import { nodeField } from '../resolvers/node-identification';
import Issue from 'models/issue';

export default {
  Query: {
    allIssues(obj, args, context) {
      return Issue.query()
    },

    node: nodeField.resolve
  }
}
