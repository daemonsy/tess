import Schema from 'graphql/schema';
import db from 'services/db';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import knexLogger from 'knex-logger';
import { Model } from 'objection';
import createLoaders from 'graphql/loaders/create-loaders';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';

Model.knex(db);

const compiler = webpack(webpackConfig);
const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const app = express();

app.use([/^\/app\/(.(?!.*\.\w+$))*$/, '/app'], webpackMiddleware(compiler, {
  historyApiFallback: true
}));

// bodyParser is needed just for POST.
app.use(knexLogger(db));
app.use(morgan('dev'));
app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ schema: Schema, context: { loaders: createLoaders() } })));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT, () => {
  console.log(`Server ready, listening on port ${PORT}`);
});
