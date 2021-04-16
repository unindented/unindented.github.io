import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";

import LayoutMain from "../LayoutMain";

export const PageContributionsQuery = graphql`
  query PageContributionsQuery {
    viewer {
      id
    }
  }
`;

const PageContributions = ({ queryReference }) => {
  const { viewer } = usePreloadedQuery(PageContributionsQuery, queryReference);

  return (
    <LayoutMain title="Contributions">{JSON.stringify(viewer)}</LayoutMain>
  );
};

export default PageContributions;
