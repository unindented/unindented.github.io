import React from "react";
import { render, screen } from "../../testUtils";

import PageOverview from "./PageOverview";

describe("PageOverview", () => {
  beforeEach(() => {
    render(<PageOverview />);
  });

  it("renders the heading", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Overview");
  });
});
