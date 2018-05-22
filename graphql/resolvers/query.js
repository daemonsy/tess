import { nodeField } from '../resolvers/node-identification';
import Application from 'models/application';

export default {
  Query: {
    application(object, args, { loaders: { one: { application } } }) {
      return application.load(args.id)
    },

    allApplications(obj, args, context) {
      return Application.query()
    },

    node: nodeField.resolve
  }
}
