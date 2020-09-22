import graphql from "babel-plugin-relay/macro";
import React from "react";
import { QueryRenderer } from "react-relay";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";

import { render, screen } from "../../testUtils";

import LayoutHeader from "./LayoutHeader";

describe("LayoutHeader", () => {
  beforeEach(() => {
    const environment = createMockEnvironment();
    const query = graphql`
      query LayoutHeaderTestQuery @relay_test_operation {
        viewer {
          ...LayoutHeader_viewer
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
      return <LayoutHeader viewer={props.viewer} />;
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

  it("renders a navigation element", () => {
    expect(screen.getByRole("navigation")).toBeVisible();
  });

  it("renders the heading contents", () => {
    expect(screen.getByRole("heading")).toHaveTextContent(
      "{{login}} (a.k.a. {{name}})"
    );
  });

  it("renders a list element", () => {
    expect(screen.getByRole("list")).toBeVisible();
  });

  it("renders multiple list item elements", () => {
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  it('renders an "overview" link', () => {
    expect(screen.getByRole("link", { name: "Overview" })).toBeVisible();
  });

  it('renders a "contributions" link', () => {
    expect(screen.getByRole("link", { name: "Contributions" })).toBeVisible();
  });

  it('renders a "repositories" link', () => {
    expect(screen.getByRole("link", { name: "Repositories" })).toBeVisible();
  });

  it('renders a "stars" link', () => {
    expect(screen.getByRole("link", { name: "Stars" })).toBeVisible();
  });
});
