import db from 'services/db';

export default {
  Query: {
    candidate(obj, args, context) {
      return db('candidates').where('id', args.id).first()
    }
  }
}
