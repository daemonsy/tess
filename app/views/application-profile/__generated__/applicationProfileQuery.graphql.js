/**
 * @flow
 * @relayHash c984280d6faba6c31a1498e46c525789
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type applicationProfileQueryVariables = {|
  applicationId: string
|};
export type applicationProfileQueryResponse = {|
  +application: ?{|
    +candidate: {|
      +firstName: string,
      +lastName: string,
      +email: string,
    |},
    +fieldEntries: $ReadOnlyArray<{|
      +question: string,
      +answer: ?string,
    |}>,
  |}
|};
*/


/*
query applicationProfileQuery(
  $applicationId: ID!
) {
  application(id: $applicationId) {
    candidate {
      firstName
      lastName
      email
      id
    }
    fieldEntries {
      question
      answer
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "applicationId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "applicationId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
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
  "name": "question",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "answer",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "applicationProfileQuery",
  "id": null,
  "text": "query applicationProfileQuery(\n  $applicationId: ID!\n) {\n  application(id: $applicationId) {\n    candidate {\n      firstName\n      lastName\n      email\n      id\n    }\n    fieldEntries {\n      question\n      answer\n      id\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "applicationProfileQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "candidate",
            "storageKey": null,
            "args": null,
            "concreteType": "Candidate",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fieldEntries",
            "storageKey": null,
            "args": null,
            "concreteType": "FieldEntry",
            "plural": true,
            "selections": [
              v5,
              v6
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "applicationProfileQuery",
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "candidate",
            "storageKey": null,
            "args": null,
            "concreteType": "Candidate",
            "plural": false,
            "selections": [
              v2,
              v3,
              v4,
              v7
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fieldEntries",
            "storageKey": null,
            "args": null,
            "concreteType": "FieldEntry",
            "plural": true,
            "selections": [
              v5,
              v6,
              v7
            ]
          },
          v7
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cb2e326f53618a316b3b3ee4cbcfd0b2';
module.exports = node;
