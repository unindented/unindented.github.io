import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";

import LayoutMain from "../LayoutMain";

export const PageOverviewQuery = graphql`
  query PageOverviewQuery {
    viewer {
      id
    }
  }
`;

const PageOverview = ({ queryReference }) => {
  const { viewer } = usePreloadedQuery(PageOverviewQuery, queryReference);

  return (
    <LayoutMain title="Overview">{JSON.stringify(viewer)}</LayoutMain>
  );
};

export default PageOverview;
