import DataLoader from 'dataloader';
import db from 'services/db';

import { groupBy } from 'lodash-es';

const findRecordSets = async keys => {
  records = await db(table).whereIn('id', keys);
  const byIds = groupBy(records, 'id');

  return keys.map(key => byIds[key] || []);
};

export default table => new DataLoader(keys => findRecordSets(keys));
