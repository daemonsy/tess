import { globalIdField } from 'graphql-relay';

export default {
  Application: {
    id: globalIdField('Application').resolve,

    candidate({ candidateId }, args, { loaders: { one: { candidate } } }) {
      return candidate.load(candidateId)
    },

    fieldEntries({ id }, args, { loaders: { many: { applicationFieldEntries } } }) {
      return applicationFieldEntries.load(id);
    },

    job({ jobId }, args, { loaders: { one: { job } } }) {
      return job.load(jobId)
    }
  }
}
