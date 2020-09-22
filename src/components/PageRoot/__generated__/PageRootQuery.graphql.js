/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_viewer$ref = any;
export type PageRootQueryVariables = {||};
export type PageRootQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: Layout_viewer$ref
  |}
|};
export type PageRootQuery = {|
  variables: PageRootQueryVariables,
  response: PageRootQueryResponse,
|};
*/


/*
query PageRootQuery {
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
    "name": "PageRootQuery",
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
    "name": "PageRootQuery",
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
    "cacheID": "e5307b389c0b4265df1dd077e2e33309",
    "id": null,
    "metadata": {},
    "name": "PageRootQuery",
    "operationKind": "query",
    "text": "query PageRootQuery {\n  viewer {\n    ...Layout_viewer\n    id\n  }\n}\n\nfragment LayoutFooter_viewer on User {\n  name\n  websiteUrl\n}\n\nfragment LayoutHeader_viewer on User {\n  login\n  name\n}\n\nfragment Layout_viewer on User {\n  ...LayoutHeader_viewer\n  ...LayoutFooter_viewer\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'a26ad3028d7835b18d44a424b38c234a';

module.exports = node;
