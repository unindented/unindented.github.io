import React, { useEffect } from "react";
import { useQueryLoader } from "react-relay/hooks";
import { Routes, Route } from "react-router-dom";

import PageRoot, { PageRootQuery } from "../PageRoot";
import PageContributions, {
  PageContributionsQuery,
} from "../PageContributions";
import PageOverview, { PageOverviewQuery } from "../PageOverview";
import PageRepositories, { PageRepositoriesQuery } from "../PageRepositories";
import PageStars, { PageStarsQuery } from "../PageStars";

import AppSkeleton from "./AppSkeleton";
import { usePreloadCallback } from "./hooks";

const AppRoutes = () => {
  const [pageRootQueryReference, loadPageRootQuery] = useQueryLoader(
    PageRootQuery
  );
  const [pageOverviewQueryReference, loadPageOverviewQuery] = useQueryLoader(
    PageOverviewQuery
  );
  const [
    pageContributionsQueryReference,
    loadPageContributionsQuery,
  ] = useQueryLoader(PageContributionsQuery);
  const [
    pageRepositoriesQueryReference,
    loadPageRepositoriesQuery,
  ] = useQueryLoader(PageRepositoriesQuery);
  const [pageStarsQueryReference, loadPageStarsQuery] = useQueryLoader(
    PageStarsQuery
  );

  useEffect(loadPageRootQuery, []);

  const preloadPageOverviewQuery = usePreloadCallback(loadPageOverviewQuery);
  const preloadPageContributionsQuery = usePreloadCallback(
    loadPageContributionsQuery
  );
  const preloadPageRepositoriesQuery = usePreloadCallback(
    loadPageRepositoriesQuery
  );
  const preloadPageStarsQuery = usePreloadCallback(loadPageStarsQuery);

  if (pageRootQueryReference == null) {
    return <AppSkeleton />;
  }

  const pageRoot = <PageRoot queryReference={pageRootQueryReference} />;
  const pageOverview = pageOverviewQueryReference && (
    <PageOverview queryReference={pageOverviewQueryReference} />
  );
  const pageContributions = pageContributionsQueryReference && (
    <PageContributions queryReference={pageContributionsQueryReference} />
  );
  const pageRepositories = pageRepositoriesQueryReference && (
    <PageRepositories queryReference={pageRepositoriesQueryReference} />
  );
  const pageStars = pageStarsQueryReference && (
    <PageStars queryReference={pageStarsQueryReference} />
  );

  return (
    <Routes>
      <Route path="/" element={pageRoot}>
        <Route
          path=""
          preload={preloadPageOverviewQuery}
          element={pageOverview}
        />
        <Route
          path="contributions"
          preload={preloadPageContributionsQuery}
          element={pageContributions}
        />
        <Route
          path="repositories"
          preload={preloadPageRepositoriesQuery}
          element={pageRepositories}
        />
        <Route
          path="stars"
          preload={preloadPageStarsQuery}
          element={pageStars}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
