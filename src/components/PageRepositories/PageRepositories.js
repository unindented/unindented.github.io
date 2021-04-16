import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";

import LayoutMain from "../LayoutMain";
import RepositoriesOwned from "../RepositoriesOwned";

export const PageRepositoriesQuery = graphql`
  query PageRepositoriesQuery {
    viewer {
      ...RepositoriesOwned_viewer
    }
  }
`;

const PageRepositories = ({ queryReference }) => {
  const { viewer } = usePreloadedQuery(PageRepositoriesQuery, queryReference);

  return (
    <LayoutMain title="Repositories">
      <RepositoriesOwned viewer={viewer} />
    </LayoutMain>
  );
};

export default PageRepositories;
