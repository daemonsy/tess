import { Model } from 'objection';
import FieldEntry from './field-entry';
import Candidate from './candidate';

class Application extends Model {
  static tableName() {
    return 'applications';
  }
  static relationMappings() {
    return {
      candidate: {
        relation: Model.BelongsToOneRelation,
        modelClass: Candidate,
        join: {
          from: 'applications.candidateId',
          to: 'candidates.id'
        }
      },
      fieldEntries: {
        relation: Model.HasManyRelation,
        modelClass: FieldEntry,
        join: {
          from: 'applications.id',
          to: 'fieldEntries.applicationId'
        }
      }
    }
  };
}

export default Application;
