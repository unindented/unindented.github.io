import React, { useCallback } from "react";
import Repository from "../Repository";

import styles from "./RepositoryList.module.css";

const RepositoryList = ({
  repositories,
  hasPrevious,
  hasNext,
  loadPrevious,
  loadNext,
  isLoadingPrevious,
  isLoadingNext,
}) => {
  const loadPreviousPage = useCallback(() => {
    if (isLoadingPrevious) {
      return;
    }
    loadPrevious();
  }, [isLoadingPrevious, loadPrevious]);

  const loadNextPage = useCallback(() => {
    if (isLoadingNext) {
      return;
    }
    loadNext();
  }, [isLoadingNext, loadNext]);

  if (repositories == null || repositories.length === 0) {
    return <div>No repositories</div>;
  }

  const previousButton = hasPrevious ? (
    <button
      name="Load previous page"
      onClick={loadPreviousPage}
      disabled={isLoadingPrevious}
    >
      {isLoadingPrevious ? "Loading..." : "Load more"}
    </button>
  ) : null;
  const nextButton = hasNext ? (
    <button
      name="Load next page"
      onClick={loadNextPage}
      disabled={isLoadingNext}
    >
      {isLoadingNext ? "Loading..." : "Load more"}
    </button>
  ) : null;

  const repositoryItems = repositories.map((edge) =>
    edge == null ? null : (
      <li className={styles.listItem}>
        <Repository key={edge.__id} repository={edge.node} />
      </li>
    )
  );
  const repositoryList = <ul className={styles.list}>{repositoryItems}</ul>;

  return (
    <>
      {previousButton}
      {repositoryList}
      {nextButton}
    </>
  );
};

export default RepositoryList;
