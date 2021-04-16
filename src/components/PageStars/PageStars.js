import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";

import LayoutMain from "../LayoutMain";
import RepositoriesStarred from "../RepositoriesStarred";

export const PageStarsQuery = graphql`
  query PageStarsQuery {
    viewer {
      ...RepositoriesStarred_viewer
    }
  }
`;

const PageStars = ({ queryReference }) => {
  const { viewer } = usePreloadedQuery(PageStarsQuery, queryReference);

  return (
    <LayoutMain title="Stars">
      <RepositoriesStarred viewer={viewer} />
    </LayoutMain>
  );
};

export default PageStars;
