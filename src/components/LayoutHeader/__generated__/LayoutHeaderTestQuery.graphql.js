/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LayoutHeader_viewer$ref = any;
export type LayoutHeaderTestQueryVariables = {||};
export type LayoutHeaderTestQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: LayoutHeader_viewer$ref
  |}
|};
export type LayoutHeaderTestQuery = {|
  variables: LayoutHeaderTestQueryVariables,
  response: LayoutHeaderTestQueryResponse,
|};
*/


/*
query LayoutHeaderTestQuery {
  viewer {
    ...LayoutHeader_viewer
    id
  }
}

fragment LayoutHeader_viewer on User {
  login
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LayoutHeaderTestQuery",
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
            "name": "LayoutHeader_viewer"
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
    "name": "LayoutHeaderTestQuery",
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "999db81e7ab848249b56b1fadc2be032",
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
        }
      }
    },
    "name": "LayoutHeaderTestQuery",
    "operationKind": "query",
    "text": "query LayoutHeaderTestQuery {\n  viewer {\n    ...LayoutHeader_viewer\n    id\n  }\n}\n\nfragment LayoutHeader_viewer on User {\n  login\n  name\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '2a348dbec66fb4ed45d3155013091b78';

module.exports = node;
