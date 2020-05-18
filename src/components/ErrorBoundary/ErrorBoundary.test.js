import React from "react";
import { render, screen } from "../../testUtils";

import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  describe("when things work fine", () => {
    beforeEach(() => {
      const Fallback = ({ error }) => <>{error.message}</>;
      const GoodChild = () => <>OHAI</>;

      render(
        <ErrorBoundary fallback={Fallback}>
          <GoodChild />
        </ErrorBoundary>
      );
    });

    it("renders its children", () => {
      expect(screen.getByText("OHAI")).toBeInTheDocument();
    });
  });

  describe("when an error occurs", () => {
    beforeEach(() => {
      jest.spyOn(console, "error").mockImplementation(() => {});

      const Fallback = ({ error }) => <>{error.message}</>;
      const BadChild = () => {
        throw new Error("BOOM");
      };

      render(
        <ErrorBoundary fallback={Fallback}>
          <BadChild />
        </ErrorBoundary>
      );
    });

    it("renders the fallback component", () => {
      expect(screen.getByText("BOOM")).toBeInTheDocument();
    });
  });
});
