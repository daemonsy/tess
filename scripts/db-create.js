import { dbManager } from 'services/db';

dbManager.createDb()
  .then(results => {
    console.log('Database created');
    process.exit(0);
  })
  .catch(error => {
    console.log(`Error encountered ${error}`);

    process.exit(1);
  });
