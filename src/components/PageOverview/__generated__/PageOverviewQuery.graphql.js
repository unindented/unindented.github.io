/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PageOverviewQueryVariables = {||};
export type PageOverviewQueryResponse = {|
  +viewer: {|
    +id: string
  |}
|};
export type PageOverviewQuery = {|
  variables: PageOverviewQueryVariables,
  response: PageOverviewQueryResponse,
|};
*/


/*
query PageOverviewQuery {
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
    "name": "PageOverviewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PageOverviewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6cd6d46572ca915d6f9fb0dd60396312",
    "id": null,
    "metadata": {},
    "name": "PageOverviewQuery",
    "operationKind": "query",
    "text": "query PageOverviewQuery {\n  viewer {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd5897be7dac6a70e3f151851842d1898';

module.exports = node;
