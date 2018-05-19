import Schema from './graphql/schema';
import db from './services/db';

const env = process.env.NODE_ENV || 'development';

db.select("*").from('candidates').then(rows => console.log(rows));
