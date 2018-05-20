import DataLoader from 'dataloader';
import db from 'services/db';

export default table =>
  new DataLoader(keys => db(table).whereIn('id', keys));
