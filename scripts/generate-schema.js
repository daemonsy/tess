import fs from 'fs';
import path from 'path';
import { graphqlSync, introspectionQuery, printIntrospectionSchema } from 'graphql';
import Schema from '../graphql/schema';


fs.writeFileSync(
  path.resolve(process.cwd(), 'app', 'schema.json'),
  JSON.stringify(graphqlSync(Schema, introspectionQuery))
);
