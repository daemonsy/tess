import db from 'services/db';

export default {
  Query: {
    application(obj, args, context) {
      return db('applications').where('id', args.id).first();
    }
  },
  Application: {
    candidate(obj, args, context) {
      return db('candidates').where('id', obj.candidateId).first();
    }
  }
}
