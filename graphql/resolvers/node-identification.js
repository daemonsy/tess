import { nodeDefinitions, fromGlobalId } from 'graphql-relay';
import db from 'services/db';

import Issue from 'models/issue';

const WHITELISTED_MODELS = {
  Issue
};

const { nodeField } = nodeDefinitions(
  async (globalId, context) => {
    const { type, id } = fromGlobalId(globalId);
    const model = WHITELISTED_MODELS[type];

    if (!model) {
      throw new Error(`No node finder model found for ${model}`)
    }

    return await model.query().findById(id);
  },
  obj => {
    throw "what am I supposed to do?";
    return obj.ships ? factionType : shipType;
  }
);

export { nodeField };

export default {
  NodeIdentification: {
    __resolveType(obj, context, info) {
      return obj.constructor.name;
    }
  }
};
