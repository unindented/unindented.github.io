import React from "react";
import { render, screen } from "../../testUtils";

import LayoutMainSkeleton from "./LayoutMainSkeleton";

describe("LayoutMainSkeleton", () => {
  beforeEach(() => {
    render(<LayoutMainSkeleton />);
  });

  it("renders a main element", () => {
    expect(screen.getByRole("main")).toBeVisible();
  });

  it("renders an article element", () => {
    expect(screen.getByRole("article")).toBeVisible();
  });

  it("renders an empty heading", () => {
    expect(screen.getByRole("heading")).toContainHTML("&nbsp;");
  });
});
