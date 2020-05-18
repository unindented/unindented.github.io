import React from "react";

import styles from "./LayoutMainCommon.module.css";

const LayoutMainCommon = ({ title, children }) => {
  const headingContents = title ? (
    title
  ) : (
    <span aria-hidden="true">&nbsp;</span>
  );

  return (
    <main id="main" className={`grid-full ${styles.main}`}>
      <article className="grid-full">
        <header className="grid-full">
          <h1 className="grid-main">{headingContents}</h1>

          <div className={`grid-full ${styles.divider}`}>
            <svg height="0" width="0">
              <defs>
                <clipPath id="header-clip" clipPathUnits="objectBoundingBox">
                  <path d="M 0 .5 L 0 1 L 1 1 L 1 .5 Q .83 1.33, .66 .5 T .33 .5 T 0 .5 Z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </header>
        <div className="grid-main">{children}</div>
      </article>
    </main>
  );
};

export default LayoutMainCommon;
