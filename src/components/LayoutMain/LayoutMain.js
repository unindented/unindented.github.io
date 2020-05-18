import React from "react";

import LayoutMainCommon from "./LayoutMainCommon";

const LayoutMain = ({ title, children }) => (
  <LayoutMainCommon title={title}>{children}</LayoutMainCommon>
);

export default LayoutMain;
