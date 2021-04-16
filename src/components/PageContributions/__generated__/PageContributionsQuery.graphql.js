/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PageContributionsQueryVariables = {||};
export type PageContributionsQueryResponse = {|
  +viewer: {|
    +id: string
  |}
|};
export type PageContributionsQuery = {|
  variables: PageContributionsQueryVariables,
  response: PageContributionsQueryResponse,
|};
*/


/*
query PageContributionsQuery {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PageContributionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PageContributionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b20b0e6e8a43f023cd71538dfd4094af",
    "id": null,
    "metadata": {},
    "name": "PageContributionsQuery",
    "operationKind": "query",
    "text": "query PageContributionsQuery {\n  viewer {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '42363048734a3a3ebae68b3f002f2822';

module.exports = node;
