import graphql from "babel-plugin-relay/macro";
import React, { Suspense } from "react";
import { useFragment } from "react-relay/hooks";

import LayoutFooter from "../LayoutFooter";
import LayoutHeader from "../LayoutHeader";
import { LayoutMainSkeleton } from "../LayoutMain";

const Layout = ({ viewer, children }) => {
  const viewerFragment = useFragment(
    graphql`
      fragment Layout_viewer on User {
        ...LayoutHeader_viewer
        ...LayoutFooter_viewer
      }
    `,
    viewer
  );

  return (
    <>
      <LayoutHeader viewer={viewerFragment} />
      <Suspense fallback={<LayoutMainSkeleton />}>{children}</Suspense>
      <LayoutFooter viewer={viewerFragment} />
    </>
  );
};

export default Layout;
