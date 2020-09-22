import graphql from "babel-plugin-relay/macro";
import React from "react";
import { QueryRenderer } from "react-relay";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";

import { render, screen } from "../../testUtils";

import Layout from "./Layout";

describe("Layout", () => {
  beforeEach(() => {
    const environment = createMockEnvironment();
    const query = graphql`
      query LayoutTestQuery @relay_test_operation {
        viewer {
          ...Layout_viewer
        }
      }
    `;
    const variables = {};
    const renderer = ({ error, props }) => {
      if (error) {
        return error.message;
      }
      if (!props) {
        return "Loading...";
      }
      return <Layout viewer={props.viewer}>Contents</Layout>;
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

  it("renders a banner element", () => {
    expect(screen.getByRole("banner")).toBeVisible();
  });

  it("renders a footer element", () => {
    expect(screen.getByRole("contentinfo")).toBeVisible();
  });

  it("renders its children", () => {
    expect(screen.getByText("Contents")).toBeVisible();
  });
});
