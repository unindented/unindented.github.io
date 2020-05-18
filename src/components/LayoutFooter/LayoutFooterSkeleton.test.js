import React from "react";
import { render, screen } from "../../testUtils";

import LayoutFooterSkeleton from "./LayoutFooterSkeleton";

describe("LayoutFooterSkeleton", () => {
  beforeEach(() => {
    render(<LayoutFooterSkeleton />);
  });

  it("renders an empty footer", () => {
    expect(screen.getByRole("contentinfo")).toContainHTML("&nbsp;");
  });
});
