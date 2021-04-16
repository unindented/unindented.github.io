import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay/hooks";

const Repository = ({ repository }) => {
  const data = useFragment(
    graphql`
      fragment Repository_repository on Repository {
        nameWithOwner
      }
    `,
    repository
  );

  return <div>{data.nameWithOwner}</div>;
};

export default Repository;
