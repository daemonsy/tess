import Application from 'models/application';

export default {
  Query: {
    application(object, args, { loaders: { finders: { application } } }) {
      return application.load(args.id)
    },

    allApplications(obj, args, context) {
      return Application.query()
    }
  }
}
