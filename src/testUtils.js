import { render } from "@testing-library/react";
import React from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";

const getWrapper = (environment) => ({ children }) => (
  <RelayEnvironmentProvider environment={environment}>
    {children}
  </RelayEnvironmentProvider>
);

export const renderWithEnvironment = (ui, environment, options) =>
  render(ui, { wrapper: getWrapper(environment), ...options });

export * from "@testing-library/react";
