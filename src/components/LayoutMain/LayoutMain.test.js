import React from "react";
import { render, screen } from "../../testUtils";

import LayoutMain from "./LayoutMain";

describe("LayoutMain", () => {
  beforeEach(() => {
    render(<LayoutMain title="Title">Contents</LayoutMain>);
  });

  it("renders a main element", () => {
    expect(screen.getByRole("main")).toBeVisible();
  });

  it("renders the heading contents", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Title");
  });

  it("renders the article contents", () => {
    expect(screen.getByRole("article")).toHaveTextContent("Contents");
  });
});
