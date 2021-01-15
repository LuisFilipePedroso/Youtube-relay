/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TweetsQueryVariables = {
    page: number;
    pageSize: number;
};
export type TweetsQueryResponse = {
    readonly tweets: {
        readonly tweets: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"TweetsFragment">;
        }>;
    };
};
export type TweetsQuery = {
    readonly response: TweetsQueryResponse;
    readonly variables: TweetsQueryVariables;
};



/*
query TweetsQuery(
  $page: Float!
  $pageSize: Float!
) {
  tweets(page: $page, pageSize: $pageSize) {
    tweets {
      ...TweetsFragment
    }
  }
}

fragment TweetsFragment on Tweet {
  _id
  author
  description
  likes
  createdAt
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "pageSize"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "page",
    "variableName": "page"
  },
  {
    "kind": "Variable",
    "name": "pageSize",
    "variableName": "pageSize"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TweetsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TweetPagination",
        "kind": "LinkedField",
        "name": "tweets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Tweet",
            "kind": "LinkedField",
            "name": "tweets",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TweetsFragment"
              }
            ],
            "storageKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TweetsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TweetPagination",
        "kind": "LinkedField",
        "name": "tweets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Tweet",
            "kind": "LinkedField",
            "name": "tweets",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "_id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "author",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "likes",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "73d9d498479b2cb653a207264f12c0da",
    "id": null,
    "metadata": {},
    "name": "TweetsQuery",
    "operationKind": "query",
    "text": "query TweetsQuery(\n  $page: Float!\n  $pageSize: Float!\n) {\n  tweets(page: $page, pageSize: $pageSize) {\n    tweets {\n      ...TweetsFragment\n    }\n  }\n}\n\nfragment TweetsFragment on Tweet {\n  _id\n  author\n  description\n  likes\n  createdAt\n}\n"
  }
};
})();
(node as any).hash = 'e84485bbfe46f303939a78a45398ca82';
export default node;
