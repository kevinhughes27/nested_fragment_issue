import * as React from "react";
import {createFragmentContainer, graphql} from "react-relay";
import FragmentTwo from "./FragmentTwo"

import { FragmentOne_foo } from "./generated/FragmentOne_foo.graphql";
import { FragmentTwo_bar } from "./generated/FragmentTwo_bar.graphql";

interface Props {
  foo: FragmentOne_foo;
  bar: FragmentTwo_bar;
}

class FragmentOne extends React.Component<Props> {
  render() {
    return (
      <div>
        <FragmentTwo bar={this.props.bar} />
      </div>
    );
  }
}

export default createFragmentContainer(FragmentOne, {
  foo: graphql`
    fragment FragmentOne_foo on Foo @relay(plural: true) {
      id
      name
    }
  `
});
