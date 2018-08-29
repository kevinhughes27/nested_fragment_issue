/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentOne_foo$ref } from "./FragmentOne_foo.graphql";
import { FragmentTwo_bar$ref } from "./FragmentTwo_bar.graphql";
export type ContainerQueryVariables = {};
export type ContainerQueryResponse = {
    readonly foo: ({
        readonly " $fragmentRefs": FragmentOne_foo$ref;
    }) | null;
    readonly bar: ({
        readonly " $fragmentRefs": FragmentTwo_bar$ref;
    }) | null;
};
export type ContainerQuery = {
    readonly response: ContainerQueryResponse;
    readonly variables: ContainerQueryVariables;
};



/*
query ContainerQuery {
  foo {
    ...FragmentOne_foo
    id
  }
  bar {
    ...FragmentTwo_bar
    id
  }
}

fragment FragmentOne_foo on Foo {
  id
  name
}

fragment FragmentTwo_bar on Bar {
  id
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ContainerQuery",
  "id": null,
  "text": "query ContainerQuery {\n  foo {\n    ...FragmentOne_foo\n    id\n  }\n  bar {\n    ...FragmentTwo_bar\n    id\n  }\n}\n\nfragment FragmentOne_foo on Foo {\n  id\n  name\n}\n\nfragment FragmentTwo_bar on Bar {\n  id\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "foo",
        "storageKey": null,
        "args": null,
        "concreteType": "Foo",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FragmentOne_foo",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bar",
        "storageKey": null,
        "args": null,
        "concreteType": "Bar",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FragmentTwo_bar",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "foo",
        "storageKey": null,
        "args": null,
        "concreteType": "Foo",
        "plural": false,
        "selections": v0
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bar",
        "storageKey": null,
        "args": null,
        "concreteType": "Bar",
        "plural": false,
        "selections": v0
      }
    ]
  }
};
})();
(node as any).hash = 'cc4413fa3578f571904211aad5c7bd43';
export default node;
