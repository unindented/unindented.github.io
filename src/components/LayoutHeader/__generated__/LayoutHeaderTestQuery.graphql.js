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
    "type": "Query"
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
        "viewer.login": {
          "type": "String",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "viewer.name": {
          "type": "String",
          "enumValues": null,
          "plural": false,
          "nullable": true
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
