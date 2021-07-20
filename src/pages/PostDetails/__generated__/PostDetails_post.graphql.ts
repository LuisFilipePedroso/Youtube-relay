/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostDetails_post = {
    readonly id: string;
    readonly title: string | null;
    readonly body: string | null;
    readonly " $refType": "PostDetails_post";
};
export type PostDetails_post$data = PostDetails_post;
export type PostDetails_post$key = {
    readonly " $data"?: PostDetails_post$data;
    readonly " $fragmentRefs": FragmentRefs<"PostDetails_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostDetails_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = '3e1dc3f7b9ba15d47917c3560c2f028c';
export default node;
