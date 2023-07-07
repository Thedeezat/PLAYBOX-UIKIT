import React from "react";
import styles from "../custom.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function RecentComponents() {
  return (
    <div className={styles.custom_heading_theme}>
      <div className={styles.dropdown_wrapper}>
        {" "}
        <select className={styles.dropdown}>
          <option disabled selected>
            Viewed file
          </option>
        </select>
        <KeyboardArrowDownIcon
          fontSize="medium"
          className={styles.dropdown_icon}
        />{" "}
      </div>{" "}
    </div>
  );
}
