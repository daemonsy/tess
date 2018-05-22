import findLoader from './find-loader';
// import hasManyLoader from 'has-many-loader';

export default () => ({
  one: {
    application: findLoader('applications'),
    candidate: findLoader('candidates'),
    job: findLoader('jobs')
  },

  many: {
    applicationFieldEntries: findLoader('fieldEntries', { id: 'applicationId', collection: true })
  }
});
