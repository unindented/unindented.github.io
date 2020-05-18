import React from "react";
import { LayoutHeaderSkeleton } from "../LayoutHeader";
import { LayoutFooterSkeleton } from "../LayoutFooter";
import { LayoutMainSkeleton } from "../LayoutMain";

const AppSkeleton = () => (
  <>
    <LayoutHeaderSkeleton />
    <LayoutMainSkeleton />
    <LayoutFooterSkeleton />
  </>
);

export default AppSkeleton;
