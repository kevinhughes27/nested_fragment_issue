/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _FragmentOne_foo$ref: unique symbol;
export type FragmentOne_foo$ref = typeof _FragmentOne_foo$ref;
export type FragmentOne_foo = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly " $refType": FragmentOne_foo$ref;
}>;



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "FragmentOne_foo",
  "type": "Foo",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '570e5f007aaeb852b22fec4c9c4e73af';
export default node;
