import graphql from "babel-plugin-relay/macro";
import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";

import LayoutFooter from "../LayoutFooter";
import LayoutHeader from "../LayoutHeader";
import LayoutMain from "../LayoutMain";

export const AppQuery = graphql`
  query AppQuery {
    viewer {
      ...LayoutHeader_viewer
      ...LayoutFooter_viewer
    }
  }
`;

const App = (props) => {
  const { viewer } = usePreloadedQuery(AppQuery, props.queryReference);

  return (
    <>
      <LayoutHeader viewer={viewer} />
      <LayoutMain title="Overview" />
      <LayoutFooter viewer={viewer} />
    </>
  );
};

export default App;
