/**
 * @flow
 * @relayHash ea833c078eed59f0ae66498d8a089425
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type appQueryVariables = {|
  id: string
|};
export type appQueryResponse = {|
  +application: ?{|
    +id: string,
    +candidate: {|
      +firstName: string,
      +email: string,
      +lastName: string,
    |},
  |}
|};
*/


/*
query appQuery(
  $id: ID!
) {
  application(id: $id) {
    id
    candidate {
      firstName
      email
      lastName
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "appQuery",
  "id": null,
  "text": "query appQuery(\n  $id: ID!\n) {\n  application(id: $id) {\n    id\n    candidate {\n      firstName\n      email\n      lastName\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "application",
        "storageKey": null,
        "args": v1,
        "concreteType": "Application",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "candidate",
            "storageKey": null,
            "args": null,
            "concreteType": "Candidate",
            "plural": false,
            "selections": [
              v3,
              v4,
              v5
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "application",
        "storageKey": null,
        "args": v1,
        "concreteType": "Application",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "candidate",
            "storageKey": null,
            "args": null,
            "concreteType": "Candidate",
            "plural": false,
            "selections": [
              v3,
              v4,
              v5,
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd18ad04222eee1c3703f8813b536b4f';
module.exports = node;
