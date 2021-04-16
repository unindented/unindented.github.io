/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Repository_repository$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepositoriesStarred_viewer$ref: FragmentReference;
declare export opaque type RepositoriesStarred_viewer$fragmentType: RepositoriesStarred_viewer$ref;
export type RepositoriesStarred_viewer = {|
  +starredRepositories: {|
    +edges: ?$ReadOnlyArray<?{|
      +__id: string,
      +node: {|
        +$fragmentRefs: Repository_repository$ref
      |},
    |}>
  |},
  +id: string,
  +$refType: RepositoriesStarred_viewer$ref,
|};
export type RepositoriesStarred_viewer$data = RepositoriesStarred_viewer;
export type RepositoriesStarred_viewer$key = {
  +$data?: RepositoriesStarred_viewer$data,
  +$fragmentRefs: RepositoriesStarred_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "starredRepositories"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 12,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RepositoriesStarredQuery.graphql.js'),
      "identifierField": "id"
    }
  },
  "name": "RepositoriesStarred_viewer",
  "selections": [
    {
      "alias": "starredRepositories",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "DESC",
            "field": "STARRED_AT"
          }
        }
      ],
      "concreteType": "StarredRepositoryConnection",
      "kind": "LinkedField",
      "name": "__RepositoriesStarred_starredRepositories_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "StarredRepositoryEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Repository",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Repository_repository"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "kind": "ClientExtension",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__id",
                  "storageKey": null
                }
              ]
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__RepositoriesStarred_starredRepositories_connection(orderBy:{\"direction\":\"DESC\",\"field\":\"STARRED_AT\"})"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c92961f8f6afdfc5e14b3bf397b656a8';

module.exports = node;
