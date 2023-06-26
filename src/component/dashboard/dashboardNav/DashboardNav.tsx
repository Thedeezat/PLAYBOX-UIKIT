import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import styles from "./dashboardNav.module.scss";

import GitHubIcon from "@mui/icons-material/GitHub";

import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";

type Props = {
  pageName: string;
};
export default function DashboardNav({ pageName }: Props) {
  return (
    <nav className={styles.dashboard_navigation}>
      {/* Logo */}
      <div className="navigation__logo">
        <Link to="/">
          <p> PLAYBOX </p>
        </Link>
      </div>

      {/* contents */}
      <div className={styles.dashboard__contents}>
        {/* first */}
        <div className={styles.page_section}>
          <p> {pageName} </p>
          <div className={styles.create_folder}>
            <span> + New Folder </span>
          </div>
        </div>
        {/* second */}
        <div className={styles.input_section}>
          <div className={styles.searchbar_wrapper}>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchbar}
            />
            <SearchIcon fontSize="medium" className={styles.searchbar_icon} />
          </div>
          {/* social media */}
          <div className={styles.socialMedia_container}>
            <GitHubIcon fontSize="large" className={styles.socialMedia_icon} />
          </div>
          <div className={styles.socialMedia_container}>
            <Brightness4OutlinedIcon
              fontSize="large"
              className={styles.socialMedia_icon}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
