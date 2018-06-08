/**
 * @flow
 * @relayHash 401cf432d1add6aaeaf325709529abb8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type issuesQueryVariables = {||};
export type issuesQueryResponse = {|
  +issues: $ReadOnlyArray<{|
    +id: string,
    +rowId: string,
    +description: ?string,
    +reportedAt: any,
  |}>
|};
*/


/*
query issuesQuery {
  issues: allIssues {
    id
    rowId
    description
    reportedAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": "issues",
    "name": "allIssues",
    "storageKey": null,
    "args": null,
    "concreteType": "Issue",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "rowId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "reportedAt",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "issuesQuery",
  "id": null,
  "text": "query issuesQuery {\n  issues: allIssues {\n    id\n    rowId\n    description\n    reportedAt\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "issuesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "issuesQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ee30e773ecb7f1fa863117658931060a';
module.exports = node;
