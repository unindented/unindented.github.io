/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RepositoriesStarred_viewer$ref = any;
export type PageStarsQueryVariables = {||};
export type PageStarsQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: RepositoriesStarred_viewer$ref
  |}
|};
export type PageStarsQuery = {|
  variables: PageStarsQueryVariables,
  response: PageStarsQueryResponse,
|};
*/


/*
query PageStarsQuery {
  viewer {
    ...RepositoriesStarred_viewer
    id
  }
}

fragment RepositoriesStarred_viewer on User {
  starredRepositories(first: 12, orderBy: {field: STARRED_AT, direction: DESC}) {
    edges {
      node {
        ...Repository_repository
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}

fragment Repository_repository on Repository {
  nameWithOwner
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 12
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "STARRED_AT"
    }
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PageStarsQuery",
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
            "name": "RepositoriesStarred_viewer"
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
    "name": "PageStarsQuery",
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
            "args": (v0/*: any*/),
            "concreteType": "StarredRepositoryConnection",
            "kind": "LinkedField",
            "name": "starredRepositories",
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
                        "name": "nameWithOwner",
                        "storageKey": null
                      },
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
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
            "storageKey": "starredRepositories(first:12,orderBy:{\"direction\":\"DESC\",\"field\":\"STARRED_AT\"})"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": [
              "orderBy"
            ],
            "handle": "connection",
            "key": "RepositoriesStarred_starredRepositories",
            "kind": "LinkedHandle",
            "name": "starredRepositories"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7ab8caaf8a72113cbbba236bad37d3f2",
    "id": null,
    "metadata": {},
    "name": "PageStarsQuery",
    "operationKind": "query",
    "text": "query PageStarsQuery {\n  viewer {\n    ...RepositoriesStarred_viewer\n    id\n  }\n}\n\nfragment RepositoriesStarred_viewer on User {\n  starredRepositories(first: 12, orderBy: {field: STARRED_AT, direction: DESC}) {\n    edges {\n      node {\n        ...Repository_repository\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Repository_repository on Repository {\n  nameWithOwner\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6240f488975608c4a2e5fa5f04131093';

module.exports = node;
