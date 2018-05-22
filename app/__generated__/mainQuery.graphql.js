/**
 * @flow
 * @relayHash de839ba1bd89146343b525d9dd4fb7b7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type mainQueryVariables = {||};
export type mainQueryResponse = {|
  +applications: $ReadOnlyArray<{|
    +id: string,
    +candidate: {|
      +firstName: string,
      +email: string,
      +lastName: string,
    |},
  |}>
|};
*/


/*
query mainQuery {
  applications: allApplications {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "mainQuery",
  "id": null,
  "text": "query mainQuery {\n  applications: allApplications {\n    id\n    candidate {\n      firstName\n      email\n      lastName\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "mainQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "applications",
        "name": "allApplications",
        "storageKey": null,
        "args": null,
        "concreteType": "Application",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "candidate",
            "storageKey": null,
            "args": null,
            "concreteType": "Candidate",
            "plural": false,
            "selections": [
              v1,
              v2,
              v3
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "mainQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "applications",
        "name": "allApplications",
        "storageKey": null,
        "args": null,
        "concreteType": "Application",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "candidate",
            "storageKey": null,
            "args": null,
            "concreteType": "Candidate",
            "plural": false,
            "selections": [
              v1,
              v2,
              v3,
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b527d5ab71440d97c1f945041099dc26';
module.exports = node;
