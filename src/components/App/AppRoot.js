import React, { Suspense } from "react";
import { preloadQuery } from "react-relay/hooks";

import environment from "../../relay/environment";
import ErrorBoundary from "../ErrorBoundary";

import App, { AppQuery } from "./App";
import AppError from "./AppError";
import AppSkeleton from "./AppSkeleton";

const preloadedQuery = preloadQuery(environment, AppQuery);

const AppRoot = () => (
  <ErrorBoundary fallback={AppError}>
    <Suspense fallback={<AppSkeleton />}>
      <App preloadedQuery={preloadedQuery} />
    </Suspense>
  </ErrorBoundary>
);

export default AppRoot;
