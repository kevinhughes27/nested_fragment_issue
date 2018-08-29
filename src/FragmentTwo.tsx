import * as React from "react";
import {createFragmentContainer, graphql} from "react-relay";

import { FragmentTwo_bar } from "./generated/FragmentTwo_bar.graphql";

interface Props {
  bar: FragmentTwo_bar;
}

class FragmentTwo extends React.Component<Props> {
  render() {
    return (
      <div>
        FragmentTwo
      </div>
    );
  }
}

export default createFragmentContainer(FragmentTwo, {
  bar: graphql`
    fragment FragmentTwo_bar on Bar @relay(plural: true) {
      id
      name
    }
  `
});
