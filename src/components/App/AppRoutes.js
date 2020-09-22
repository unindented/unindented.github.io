import React, { useEffect } from "react";
import { useQueryLoader } from "react-relay/hooks";
import { Routes, Route } from "react-router-dom";

import PageRoot, { PageRootQuery } from "../PageRoot";
import PageContributions from "../PageContributions";
import PageOverview from "../PageOverview";
import PageRepositories from "../PageRepositories";
import PageStars from "../PageStars";

import AppSkeleton from "./AppSkeleton";

const AppRoutes = () => {
  const [pageRootQueryReference, loadPageRootQuery] = useQueryLoader(
    PageRootQuery
  );

  useEffect(() => {
    if (pageRootQueryReference == null) {
      loadPageRootQuery();
    }
  }, []);

  if (pageRootQueryReference == null) {
    return <AppSkeleton />;
  }

  const pageRoot = <PageRoot queryReference={pageRootQueryReference} />;
  const pageOverview = <PageOverview />;
  const pageContributions = <PageContributions />;
  const pageRepositories = <PageRepositories />;
  const pageStars = <PageStars />;

  return (
    <Routes>
      <Route path="/" element={pageRoot}>
        <Route path="" element={pageOverview} />
        <Route path="contributions" element={pageContributions} />
        <Route path="repositories" element={pageRepositories} />
        <Route path="stars" element={pageStars} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
