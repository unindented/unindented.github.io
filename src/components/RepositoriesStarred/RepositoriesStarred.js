import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePaginationFragment } from "react-relay/hooks";
import RepositoryList from "../RepositoryList";

const RepositoriesStarred = ({ viewer }) => {
  const {
    data,
    hasPrevious,
    hasNext,
    loadPrevious,
    loadNext,
    isLoadingPrevious,
    isLoadingNext,
  } = usePaginationFragment(
    graphql`
      fragment RepositoriesStarred_viewer on User
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 12 }
        cursor: { type: "String" }
      )
      @refetchable(queryName: "RepositoriesStarredQuery") {
        starredRepositories(
          first: $count
          after: $cursor
          orderBy: { field: STARRED_AT, direction: DESC }
        ) @connection(key: "RepositoriesStarred_starredRepositories") {
          edges {
            __id
            node {
              ...Repository_repository
            }
          }
        }
      }
    `,
    viewer
  );

  return (
    <RepositoryList
      repositories={data.starredRepositories.edges}
      hasPrevious={hasPrevious}
      hasNext={hasNext}
      loadPrevious={loadPrevious}
      loadNext={loadNext}
      isLoadingPrevious={isLoadingPrevious}
      isLoadingNext={isLoadingNext}
    />
  );
};

export default RepositoriesStarred;
