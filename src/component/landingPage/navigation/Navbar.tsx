import styles from "./nav.module.scss";

import { Link } from "react-router-dom";

import { BsMoonStars } from "react-icons/bs";

type homeProps = {
  showDashboard?: false;
};

export default function Navbar(props: homeProps) {
  return (
    <nav className={styles.navigation}>
      {/* Logo */}
      <div className="navigation__logo">
        <Link to="/">
          <p> PLAYBOX </p>
        </Link>
      </div>
      {/* lists */}
      <ul className={styles.navigation__lists}>
        <li className={styles.navigation__list}>Docs</li>
        <li className={styles.navigation__list}>Components</li>
        <div className={styles.mode_theme}>
          <BsMoonStars
            className={`${styles.navigation__list} ${styles.theme_icon}`}
          />
        </div>
      </ul>
    </nav>
  );
}
