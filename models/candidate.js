import { Model } from 'objection';
import Application from './application';

class Candidate extends Model {
  static tableName() {
    return 'candidates';
  }

  static relationMappings() {
    return {
      applications: {
        relation: Model.HasManyRelation,
        modelClass: Application,
        join: {
          from: 'candidates.id',
          to: 'applications.candidateId'
        }
      }
    }
  };
}

export default Candidate;
