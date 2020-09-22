import React from "react";
import { render, screen } from "../../testUtils";

import PageStars from "./PageStars";

describe("PageStars", () => {
  beforeEach(() => {
    render(<PageStars />);
  });

  it("renders the heading", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Stars");
  });
});
