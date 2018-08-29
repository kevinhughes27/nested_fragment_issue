/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _FragmentTwo_bar$ref: unique symbol;
export type FragmentTwo_bar$ref = typeof _FragmentTwo_bar$ref;
export type FragmentTwo_bar = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly " $refType": FragmentTwo_bar$ref;
}>;



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "FragmentTwo_bar",
  "type": "Bar",
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
(node as any).hash = 'b48042fa6ccbfde2674d082b7a0e151e';
export default node;
