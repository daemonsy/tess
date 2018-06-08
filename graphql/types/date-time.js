import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

const DateTimeType = `scalar DateTime`;

const DateTimeResolver = {
  Datetime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'Datetime value serialized to ISO 8601',
    parseValue(value) {
      return new Date(value)
    },
    serialize(value) {
      return value.toISOString()
    },
    parseLiteral({ kind, value }) {
      if (kind === Kind.STRING) {
        return new Date(value);
      }
      return null;
    }
  })
};

export {
  DateTimeType,
  DateTimeResolver
}

export default () => [Datetime];
