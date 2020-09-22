import { render } from "@testing-library/react";
import React from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { MemoryRouter } from "react-router";

const getWrapper = ({ relayOptions, routerOptions = {} }) => ({ children }) => {
  const wrappedChildren = (
    <MemoryRouter {...routerOptions}>{children}</MemoryRouter>
  );

  return relayOptions ? (
    <RelayEnvironmentProvider {...relayOptions}>
      {wrappedChildren}
    </RelayEnvironmentProvider>
  ) : (
    wrappedChildren
  );
};

export const renderWithEnvironment = (
  ui,
  { relayOptions, routerOptions, ...options } = {}
) =>
  render(ui, {
    wrapper: getWrapper({ relayOptions, routerOptions }),
    ...options,
  });

export * from "@testing-library/react";
export { renderWithEnvironment as render };
