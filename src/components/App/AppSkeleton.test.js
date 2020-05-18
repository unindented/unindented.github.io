import React from "react";
import { render, screen } from "../../testUtils";

import AppSkeleton from "./AppSkeleton";

describe("AppSkeleton", () => {
  beforeEach(() => {
    render(<AppSkeleton />);
  });

  it("renders a navigation element", () => {
    expect(screen.getByRole("navigation")).toBeVisible();
  });

  it("renders a main element", () => {
    expect(screen.getByRole("main")).toBeVisible();
  });

  it("renders a footer element", () => {
    expect(screen.getByRole("contentinfo")).toBeVisible();
  });
});
