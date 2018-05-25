import { dbManager } from 'services/db';

dbManager.dropDb()
  .then(results => {
    console.log('Database dropped');
    process.exit(0);
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1);
  });
