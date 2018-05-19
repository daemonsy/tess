import Schema from 'graphql/schema';
import db from 'services/db';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import knexLogger from 'knex-logger';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const env = process.env.NODE_ENV || 'development';
const PORT = 3000;
const app = express();

// bodyParser is needed just for POST.
app.use(knexLogger(db));
app.use(morgan('dev'));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: Schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT, () => {
  console.log(`Server ready, listening on port ${PORT}`);
});
