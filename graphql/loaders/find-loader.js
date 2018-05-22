import DataLoader from 'dataloader';
import db from 'services/db';

import { groupBy } from 'lodash-es';

const findRecords = async (keys, { id, table, collection } = {}) => {
  const records = await db(table).whereIn(id, keys);
  const byIds = groupBy(records, id);


  return keys.map(key => {
    const subject = byIds[key] || [];
    return (collection ? subject : subject[0]);
  });
};

export default (table, { id = 'id', collection = false } = {}) =>
  new DataLoader(keys => findRecords(keys, { id, table, collection }));
