/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Repository_repository$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RepositoriesOwned_viewer$ref: FragmentReference;
declare export opaque type RepositoriesOwned_viewer$fragmentType: RepositoriesOwned_viewer$ref;
export type RepositoriesOwned_viewer = {|
  +repositories: {|
    +edges: ?$ReadOnlyArray<?{|
      +__id: string,
      +node: ?{|
        +$fragmentRefs: Repository_repository$ref
      |},
    |}>
  |},
  +id: string,
  +$refType: RepositoriesOwned_viewer$ref,
|};
export type RepositoriesOwned_viewer$data = RepositoriesOwned_viewer;
export type RepositoriesOwned_viewer$key = {
  +$data?: RepositoriesOwned_viewer$data,
  +$fragmentRefs: RepositoriesOwned_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  "repositories"
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
      "operation": require('./RepositoriesOwnedQuery.graphql.js'),
      "identifierField": "id"
    }
  },
  "name": "RepositoriesOwned_viewer",
  "selections": [
    {
      "alias": "repositories",
      "args": [
        {
          "kind": "Literal",
          "name": "isFork",
          "value": false
        },
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "DESC",
            "field": "PUSHED_AT"
          }
        },
        {
          "kind": "Literal",
          "name": "ownerAffiliations",
          "value": [
            "OWNER"
          ]
        }
      ],
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "__RepositoriesOwned_repositories_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RepositoryEdge",
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
      "storageKey": "__RepositoriesOwned_repositories_connection(isFork:false,orderBy:{\"direction\":\"DESC\",\"field\":\"PUSHED_AT\"},ownerAffiliations:[\"OWNER\"])"
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
(node/*: any*/).hash = '8d207f8c6e99b26ffd4aa031e980deee';

module.exports = node;
