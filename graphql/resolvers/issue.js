import { globalIdField } from 'graphql-relay';

export default {
  Issue: {
    id: globalIdField('Issue').resolve,
    rowId: (object, args, context) => object.id
  }
};
