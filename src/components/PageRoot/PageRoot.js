import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";
import { Outlet } from "react-router-dom";

import Layout from "../Layout";

export const PageRootQuery = graphql`
  query PageRootQuery {
    viewer {
      ...Layout_viewer
    }
  }
`;

const PageRoot = ({ queryReference }) => {
  const { viewer } = usePreloadedQuery(PageRootQuery, queryReference);

  return (
    <Layout viewer={viewer}>
      <Outlet />
    </Layout>
  );
};

export default PageRoot;
