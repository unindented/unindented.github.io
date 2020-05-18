import React from "react";

import styles from "./LayoutHeaderCommon.module.css";

const LayoutHeaderCommon = ({ login, name }) => {
  const headingContents = login ? (
    <a href="/">
      {login}{" "}
      <span className="sr-only">
        (<abbr title="also known as">a.k.a.</abbr> {name})
      </span>
    </a>
  ) : (
    <span aria-hidden="true">&nbsp;</span>
  );

  return (
    <>
      <header className={`grid-full ${styles.header}`}>
        <nav className="grid-main">
          <h1>{headingContents}</h1>
          <ul>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Contributions</a>
            </li>
            <li>
              <a href="#">Repositories</a>
            </li>
            <li>
              <a href="#">Stars</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeaderCommon;
