import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./LayoutHeaderCommon.module.css";

const LayoutHeaderCommon = ({ login, name }) => {
  const headingContents = login ? (
    <Link to="/">
      {login}{" "}
      <span className="sr-only">
        (<abbr title="also known as">a.k.a.</abbr> {name})
      </span>
    </Link>
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
              <NavLink to="" end activeClassName={styles.active}>
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="contributions" activeClassName={styles.active}>
                Contributions
              </NavLink>
            </li>
            <li>
              <NavLink to="repositories" activeClassName={styles.active}>
                Repositories
              </NavLink>
            </li>
            <li>
              <NavLink to="stars" activeClassName={styles.active}>
                Stars
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeaderCommon;
