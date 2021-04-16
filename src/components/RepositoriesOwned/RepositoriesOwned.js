import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePaginationFragment } from "react-relay/hooks";
import RepositoryList from "../RepositoryList";

const RepositoriesOwned = ({ viewer }) => {
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
      fragment RepositoriesOwned_viewer on User
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 12 }
      )
      @refetchable(queryName: "RepositoriesOwnedQuery") {
        repositories(
          first: $count
          after: $cursor
          ownerAffiliations: [OWNER]
          isFork: false
          orderBy: { field: PUSHED_AT, direction: DESC }
        ) @connection(key: "RepositoriesOwned_repositories") {
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
      repositories={data.repositories.edges}
      hasPrevious={hasPrevious}
      hasNext={hasNext}
      loadPrevious={loadPrevious}
      loadNext={loadNext}
      isLoadingPrevious={isLoadingPrevious}
      isLoadingNext={isLoadingNext}
    />
  );
};

export default RepositoriesOwned;
