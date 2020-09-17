import React, { Suspense, useEffect } from "react";
import { useQueryLoader } from "react-relay/hooks";

import ErrorBoundary from "../ErrorBoundary";

import App, { AppQuery } from "./App";
import AppError from "./AppError";
import AppSkeleton from "./AppSkeleton";

const AppRoot = () => {
  const [queryReference, loadQuery] = useQueryLoader(AppQuery);

  useEffect(() => {
    if (queryReference == null) {
      loadQuery();
    }
  }, [loadQuery]);

  const skeleton = <AppSkeleton />;

  return queryReference == null ? (
    skeleton
  ) : (
    <ErrorBoundary fallback={AppError}>
      <Suspense fallback={skeleton}>
        <App queryReference={queryReference} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoot;
