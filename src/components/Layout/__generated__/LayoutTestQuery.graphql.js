/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Layout_viewer$ref = any;
export type LayoutTestQueryVariables = {||};
export type LayoutTestQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: Layout_viewer$ref
  |}
|};
export type LayoutTestQuery = {|
  variables: LayoutTestQueryVariables,
  response: LayoutTestQueryResponse,
|};
*/


/*
query LayoutTestQuery {
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
    "name": "LayoutTestQuery",
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
    "name": "LayoutTestQuery",
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
    "cacheID": "122adced42b23360d2ed2eaa580423b2",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "User"
        },
        "viewer.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "viewer.login": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        },
        "viewer.name": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "viewer.websiteUrl": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "URI"
        }
      }
    },
    "name": "LayoutTestQuery",
    "operationKind": "query",
    "text": "query LayoutTestQuery {\n  viewer {\n    ...Layout_viewer\n    id\n  }\n}\n\nfragment LayoutFooter_viewer on User {\n  name\n  websiteUrl\n}\n\nfragment LayoutHeader_viewer on User {\n  login\n  name\n}\n\nfragment Layout_viewer on User {\n  ...LayoutHeader_viewer\n  ...LayoutFooter_viewer\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'e152ead61ed188bfaea72c3f5b9d15a5';

module.exports = node;
