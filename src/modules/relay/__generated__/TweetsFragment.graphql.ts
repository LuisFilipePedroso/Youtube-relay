/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TweetsFragment = {
    readonly _id: string | null;
    readonly author: string;
    readonly description: string;
    readonly likes: number | null;
    readonly createdAt: unknown | null;
    readonly " $refType": "TweetsFragment";
};
export type TweetsFragment$data = TweetsFragment;
export type TweetsFragment$key = {
    readonly " $data"?: TweetsFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"TweetsFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TweetsFragment",
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
  "type": "Tweet",
  "abstractKey": null
};
(node as any).hash = 'f59f352f95731bff769f3c4753771ff5';
export default node;
