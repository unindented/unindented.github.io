import React from "react";
import { render, screen } from "../../testUtils";

import LayoutHeaderSkeleton from "./LayoutHeaderSkeleton";

describe("LayoutHeaderSkeleton", () => {
  beforeEach(() => {
    render(<LayoutHeaderSkeleton />);
  });

  it("renders a navigation element", () => {
    expect(screen.getByRole("navigation")).toBeVisible();
  });

  it("renders an empty heading", () => {
    expect(screen.getByRole("heading")).toContainHTML("&nbsp;");
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
