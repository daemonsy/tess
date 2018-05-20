import { Model } from 'objection';
import Application from './application';

class FieldEntry extends Model {
  static tableName() {
    return 'fieldEntries';
  }

  static relationMappings() {
    return {
      application: {
        relation: Model.BelongsToOneRelation,
        modelClass: Application,
        join: {
          from: 'fieldEntries.application_id',
          to: 'applications.id'
        }
      }
    }
  };
}

export default FieldEntry;
