import React from "react";
import { render, screen } from "../../testUtils";

import PageContributions from "./PageContributions";

describe("PageContributions", () => {
  beforeEach(() => {
    render(<PageContributions />);
  });

  it("renders the heading", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Contributions");
  });
});
