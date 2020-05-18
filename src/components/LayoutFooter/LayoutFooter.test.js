import graphql from "babel-plugin-relay/macro";
import React from "react";
import { QueryRenderer } from "react-relay";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";

import { render, screen } from "../../testUtils";

import LayoutFooter from "./LayoutFooter";

describe("LayoutFooter", () => {
  beforeEach(() => {
    const environment = createMockEnvironment();
    const query = graphql`
      query LayoutFooterTestQuery @relay_test_operation {
        viewer {
          ...LayoutFooter_viewer
        }
      }
    `;
    const variables = {};
    const renderer = ({ error, props }) => {
      if (error) {
        return error.message;
      }
      if (props) {
        return <LayoutFooter viewer={props.viewer} />;
      }
      return "Loading...";
    };

    const TestRenderer = () => (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables}
        render={renderer}
      />
    );

    render(<TestRenderer />);

    environment.mock.resolveMostRecentOperation((operation) =>
      MockPayloadGenerator.generate(operation, {
        String: (context) => `{{${context.name}}}`,
      })
    );
  });

  it("renders the footer contents", () => {
    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      "An exploration in React and Relay by {{name}}"
    );
  });
});
