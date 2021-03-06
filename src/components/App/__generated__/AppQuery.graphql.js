/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_viewer$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: Layout_viewer$ref
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  viewer {
    ...Layout_viewer
    id
  }
}

fragment LayoutFooter_viewer on User {
  name
  websiteUrl
}

fragment LayoutHeader_viewer on User {
  login
  name
}

fragment Layout_viewer on User {
  ...LayoutHeader_viewer
  ...LayoutFooter_viewer
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Layout_viewer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
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
            "name": "login",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "websiteUrl",
            "storageKey": null
          },
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
    ]
  },
  "params": {
    "cacheID": "05aea2038981d702bfba9fb6b382eb3a",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  viewer {\n    ...Layout_viewer\n    id\n  }\n}\n\nfragment LayoutFooter_viewer on User {\n  name\n  websiteUrl\n}\n\nfragment LayoutHeader_viewer on User {\n  login\n  name\n}\n\nfragment Layout_viewer on User {\n  ...LayoutHeader_viewer\n  ...LayoutFooter_viewer\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'd615b34fcd319c1f338382095b0d38d6';

module.exports = node;
