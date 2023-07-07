import React from "react";
import styles from "../custom.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function LanguageDropdown() {
  return (
    <div className={styles.custom_heading_theme}>
      <div className={styles.dropdown_wrapper}>
        {" "}
        <select className={styles.dropdown}>
          <option disabled selected>
            index.html (ES6)
          </option>
          <option value="React">React (16.0)</option>
          <option value="Typescript">Typescript (12.1)</option>
          <option value="Nodejs">Nodejs (18.0)</option>
        </select>
        <KeyboardArrowDownIcon
          fontSize="medium"
          className={styles.dropdown_icon}
        />{" "}
      </div>{" "}
    </div>
  );
}
