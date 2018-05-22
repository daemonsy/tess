/**
 * @flow
 * @relayHash 8d4a3951c91ac50f0035d493f4ece11e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type applicationsQueryVariables = {||};
export type applicationsQueryResponse = {|
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
query applicationsQuery {
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
  "name": "applicationsQuery",
  "id": null,
  "text": "query applicationsQuery {\n  applications: allApplications {\n    id\n    candidate {\n      firstName\n      email\n      lastName\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "applicationsQuery",
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
    "name": "applicationsQuery",
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
(node/*: any*/).hash = 'af549d8161847b81a06d582ab149009b';
module.exports = node;
