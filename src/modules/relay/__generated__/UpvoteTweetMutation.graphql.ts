/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UpvoteTweetMutationVariables = {
    id: string;
};
export type UpvoteTweetMutationResponse = {
    readonly upvoteTweet: {
        readonly " $fragmentRefs": FragmentRefs<"TweetsFragment">;
    };
};
export type UpvoteTweetMutation = {
    readonly response: UpvoteTweetMutationResponse;
    readonly variables: UpvoteTweetMutationVariables;
};



/*
mutation UpvoteTweetMutation(
  $id: String!
) {
  upvoteTweet(id: $id) {
    ...TweetsFragment
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
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpvoteTweetMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Tweet",
        "kind": "LinkedField",
        "name": "upvoteTweet",
        "plural": false,
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpvoteTweetMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Tweet",
        "kind": "LinkedField",
        "name": "upvoteTweet",
        "plural": false,
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
    ]
  },
  "params": {
    "cacheID": "5af68733103bc01e3324b83b1d680e80",
    "id": null,
    "metadata": {},
    "name": "UpvoteTweetMutation",
    "operationKind": "mutation",
    "text": "mutation UpvoteTweetMutation(\n  $id: String!\n) {\n  upvoteTweet(id: $id) {\n    ...TweetsFragment\n  }\n}\n\nfragment TweetsFragment on Tweet {\n  _id\n  author\n  description\n  likes\n  createdAt\n}\n"
  }
};
})();
(node as any).hash = '60fcc816930e41e5ddb1229d9cd65022';
export default node;
