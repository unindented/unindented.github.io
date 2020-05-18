import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useFragment } from "react-relay/hooks";

import LayoutFooterCommon from "./LayoutFooterCommon";

const LayoutFooter = ({ viewer }) => {
  const data = useFragment(
    graphql`
      fragment LayoutFooter_viewer on User {
        name
        websiteUrl
      }
    `,
    viewer
  );

  return <LayoutFooterCommon name={data.name} websiteUrl={data.websiteUrl} />;
};

export default LayoutFooter;
