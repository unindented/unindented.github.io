/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RepositoriesOwned_viewer$ref = any;
export type PageRepositoriesQueryVariables = {||};
export type PageRepositoriesQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: RepositoriesOwned_viewer$ref
  |}
|};
export type PageRepositoriesQuery = {|
  variables: PageRepositoriesQueryVariables,
  response: PageRepositoriesQueryResponse,
|};
*/


/*
query PageRepositoriesQuery {
  viewer {
    ...RepositoriesOwned_viewer
    id
  }
}

fragment RepositoriesOwned_viewer on User {
  repositories(first: 12, ownerAffiliations: [OWNER], isFork: false, orderBy: {field: PUSHED_AT, direction: DESC}) {
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
    "name": "PageRepositoriesQuery",
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
            "name": "RepositoriesOwned_viewer"
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
    "name": "PageRepositoriesQuery",
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
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
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
            "storageKey": "repositories(first:12,isFork:false,orderBy:{\"direction\":\"DESC\",\"field\":\"PUSHED_AT\"},ownerAffiliations:[\"OWNER\"])"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": [
              "ownerAffiliations",
              "isFork",
              "orderBy"
            ],
            "handle": "connection",
            "key": "RepositoriesOwned_repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "354a908dc45272b644eb180ba22707df",
    "id": null,
    "metadata": {},
    "name": "PageRepositoriesQuery",
    "operationKind": "query",
    "text": "query PageRepositoriesQuery {\n  viewer {\n    ...RepositoriesOwned_viewer\n    id\n  }\n}\n\nfragment RepositoriesOwned_viewer on User {\n  repositories(first: 12, ownerAffiliations: [OWNER], isFork: false, orderBy: {field: PUSHED_AT, direction: DESC}) {\n    edges {\n      node {\n        ...Repository_repository\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Repository_repository on Repository {\n  nameWithOwner\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d460bbef85d920b171e220df8bae7f6';

module.exports = node;
