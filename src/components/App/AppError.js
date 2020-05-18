import React from "react";
import { LayoutHeaderSkeleton } from "../LayoutHeader";
import { LayoutFooterSkeleton } from "../LayoutFooter";
import LayoutMain from "../LayoutMain";

const AppError = ({ error }) => (
  <>
    <LayoutHeaderSkeleton />
    <LayoutMain title="Oops">
      <p>
        Something went wrong: <em>{error.message}</em>
      </p>
    </LayoutMain>
    <LayoutFooterSkeleton />
  </>
);

export default AppError;
