import React from "react";

import styles from "./LayoutFooterCommon.module.css";

const LayoutFooterCommon = ({ name, websiteUrl }) => {
  const footerContents =
    name && websiteUrl ? (
      <>
        An exploration in{" "}
        <a href="https://reactjs.org/" rel="external">
          React
        </a>{" "}
        and{" "}
        <a href="https://relay.dev/" rel="external">
          Relay
        </a>{" "}
        by{" "}
        <a href={websiteUrl} rel="external">
          {name}
        </a>
        .
      </>
    ) : (
      <span aria-hidden="true">&nbsp;</span>
    );

  return (
    <footer className={`grid-full ${styles.footer}`}>
      <div className={`grid-full ${styles.divider}`}>
        <svg height="0" width="0">
          <defs>
            <clipPath id="footer-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0 .5 L 0 0 L 1 0 L 1 .5 Q .83 1.33, .66 .5 T .33 .5 T 0 .5 Z" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <p className="grid-main">{footerContents}</p>
    </footer>
  );
};

export default LayoutFooterCommon;
