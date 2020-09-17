/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LayoutFooter_viewer$ref = any;
export type LayoutFooterTestQueryVariables = {||};
export type LayoutFooterTestQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: LayoutFooter_viewer$ref
  |}
|};
export type LayoutFooterTestQuery = {|
  variables: LayoutFooterTestQueryVariables,
  response: LayoutFooterTestQueryResponse,
|};
*/


/*
query LayoutFooterTestQuery {
  viewer {
    ...LayoutFooter_viewer
    id
  }
}

fragment LayoutFooter_viewer on User {
  name
  websiteUrl
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutFooterTestQuery",
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
            "name": "LayoutFooter_viewer"
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
    "name": "LayoutFooterTestQuery",
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
    "cacheID": "93296a454b95ad18be9390071a00f1ad",
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
    "name": "LayoutFooterTestQuery",
    "operationKind": "query",
    "text": "query LayoutFooterTestQuery {\n  viewer {\n    ...LayoutFooter_viewer\n    id\n  }\n}\n\nfragment LayoutFooter_viewer on User {\n  name\n  websiteUrl\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '0c0be4c3f76457b8d16005899cabf3c2';

module.exports = node;
