import { lazy } from "react";

export default lazy(() =>
  import(/* webpackChunkName: "page-stars" */ "./PageStars")
);
export * from "./PageStars";
