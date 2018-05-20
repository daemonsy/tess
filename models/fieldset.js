import { Model } from 'objection';
import Field from './field';

class Fieldset extends Model {
  static tableName() {
    return 'fieldsets';
  }

  static relationMappings() {
    return {
      fields: {
        relation: Model.HasManyRelation,
        modelClass: Field,
        join: {
          from: 'fieldsets.id',
          to: 'fields.fieldsetId'
        }
      }
    }
  }
}

export default Fieldset;
