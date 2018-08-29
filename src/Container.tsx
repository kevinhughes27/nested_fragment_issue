import * as React from "react";
import { QueryRenderer, graphql } from "react-relay";
import FragmentOne from "./FragmentOne";
import environment from "./relay";

const query = graphql`
  query ContainerQuery {
    foo {
      ...FragmentOne_foo
    },
    bar {
      ...FragmentTwo_bar
    }
  }
`;

class Container extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{}}
        render={
          ({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return <FragmentOne foo={props.foo} bar={props.bar} />;
            } else {
              return <div>Loading...</div>;
            }
          }
        }
      />
    );
  }
}

export default Container;
