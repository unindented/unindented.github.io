import { lazy } from "react";

export default lazy(() =>
  import(/* webpackChunkName: "page-repositories" */ "./PageRepositories")
);
