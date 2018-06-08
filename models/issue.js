import { Model } from 'objection';

class Issue extends Model {
  static tableName() {
    return 'issues';
  }

  static relationMappings() {
    return {};
  };
}

export default Issue;
