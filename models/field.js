import { Model } from 'objection';
import Fieldset from './fieldset';

class Field extends Model {
  static tableName() {
    return 'fields';
  }

  static relationMappings() {
    return {
      fields: {
        relation: Model.BelongsToOneRelation,
        modelClass: Fieldset,
        join: {
          from: 'fields.fieldsetId',
          to: 'fieldsets.id'
        }
      }
    }
  }
}

export default Field;
