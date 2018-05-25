import test from 'ava';
import { graphql, introspectionQuery } from 'graphql';
import Schema from 'graphql/schema';
import jsonSchema from 'app/schema.json';

test('Schema matches the schema dumped on the app (prevents Relay from using an old schema)', async t => {
  const results = await graphql(Schema, introspectionQuery);

  t.deepEqual(results, jsonSchema);
});
