import { lazy } from "react";

export default lazy(() =>
  import(/* webpackChunkName: "page-overview" */ "./PageOverview")
);
