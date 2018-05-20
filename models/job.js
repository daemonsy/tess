import { Model } from 'objection';
import Fieldset from './fieldset';
import Application from './application';

class Job extends Model {
  static tableName() {
    return 'jobs';
  }

  static relationMappings() {
    return {
      applications: {
        relation: Model.HasManyRelation,
        modelClass: Application,
        join: {
          from: 'jobs.id',
          to: 'applications.jobId'
        }
      },

      fieldset: {
        relation: Model.BelongsToOneRelation,
        modelClass: Fieldset,
        join: {
          from: 'jobs.fieldsetId',
          to: 'fieldsets.id'
        }
      }
    }
  }
}

export default Job;
