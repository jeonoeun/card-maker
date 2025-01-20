import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <div className={styles.wrapper}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Metaverse Card Maker</h1>
      </div>
    </header>
  );
});

export default Header;
