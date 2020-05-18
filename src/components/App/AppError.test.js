import React from "react";
import { render, screen } from "../../testUtils";

import AppError from "./AppError";

describe("AppError", () => {
  beforeEach(() => {
    const error = new Error("BOOM");

    render(<AppError error={error} />);
  });

  it("renders a navigation element", () => {
    expect(screen.getByRole("navigation")).toBeVisible();
  });

  it("renders the heading contents", () => {
    expect(screen.getByRole("heading", { name: "Oops" })).toBeVisible();
  });

  it("renders the error message", () => {
    expect(screen.getByRole("main")).toHaveTextContent(
      "Something went wrong: BOOM"
    );
  });

  it("renders a footer element", () => {
    expect(screen.getByRole("contentinfo")).toBeVisible();
  });
});
