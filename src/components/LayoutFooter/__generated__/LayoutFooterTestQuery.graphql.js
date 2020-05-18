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
    "type": "Query"
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
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "type": "User",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "viewer.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.name": {
          "type": "String",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.websiteUrl": {
          "type": "URI",
          "enumValues": null,
          "plural": false,
          "nullable": true
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
