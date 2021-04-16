import { lazy } from "react";

export default lazy(() =>
  import(/* webpackChunkName: "page-contributions" */ "./PageContributions")
);
export * from "./PageContributions";
