import React from "react";
import { render, screen } from "../../testUtils";

import PageRepositories from "./PageRepositories";

describe("PageRepositories", () => {
  beforeEach(() => {
    render(<PageRepositories />);
  });

  it("renders the heading", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Repositories");
  });
});
