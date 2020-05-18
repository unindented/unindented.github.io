import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay/hooks";

import LayoutHeaderCommon from "./LayoutHeaderCommon";

const LayoutHeader = ({ viewer }) => {
  const data = useFragment(
    graphql`
      fragment LayoutHeader_viewer on User {
        login
        name
      }
    `,
    viewer
  );

  return <LayoutHeaderCommon login={data.login} name={data.name} />;
};

export default LayoutHeader;
