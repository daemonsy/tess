import findLoader from './find-loader';
// import hasManyLoader from 'has-many-loader';

export default () => ({
  one: {
    issue: findLoader('issues'),
  },

  many: {
  }
});
