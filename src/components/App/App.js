import React, { Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary";

import AppError from "./AppError";
import AppSkeleton from "./AppSkeleton";
import AppRoutes from "./AppRoutes";

const AppRoot = () => {
  return (
    <ErrorBoundary fallback={AppError}>
      <Suspense fallback={<AppSkeleton />}>
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoot;
