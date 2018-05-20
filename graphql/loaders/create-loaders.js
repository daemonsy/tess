import findLoader from './findLoader';

export default () => ({
  finders: {
    application: findLoader('applications'),
    candidate: findLoader('candidates'),
    job: findLoader('jobs')
  }
});
