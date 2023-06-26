import styles from "./custom.module.scss";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Custom() {
  return (
    <section className={styles.custom}>
      <div className={styles.custom_heading}>
        <h3 className={styles.custom_heading_intro}>
          {" "}
          Create custom components{" "}
        </h3>
        {/* list  */}
        <div className={styles.custom_nav}>
          <div className={`${styles.custom_active} ${styles.custom_nav__list}`}>
            HTML
          </div>
          <div className={styles.custom_nav__list}>Create React app</div>
          <div className={styles.custom_nav__list}>Angular.js</div>
          <div className={styles.custom_nav__list}>Typescript</div>
          <div className={styles.custom_nav__list}>Next.js</div>
        </div>
        {/* theme */}
        <div className={styles.custom_heading_theme}>
          <h4 className={styles.custom_heading_theme_head}> Choose a theme </h4>
          <div className={styles.dropdown_wrapper}>
            {" "}
            <select className={styles.dropdown}>
              <option disabled selected>
                Material theme
              </option>
              <option value="option1">Dracula theme</option>
              <option value="option2">Light theme</option>
              <option value="option3">Mocha theme</option>
            </select>
            <KeyboardArrowDownIcon
              fontSize="large"
              className={styles.dropdown_icon}
            />{" "}
          </div>{" "}
        </div>
      </div>

      <div className={styles.custom_board}>
        <div className={styles.code_editor}>
          {/* Header tabs */}
          <div className={styles.code_editor__header}>
            {/* code tabs */}
            <div className={styles.code__tabs}>
              <p className={styles.header__tabs}>index.html</p>
            </div>
            {/* action tabs */}
            <div className={styles.action__tabs}>
              <p className={styles.header__tabs}>Save file</p>
              <p className={styles.header__tabs}>New tab</p>
              <p className={styles.header__tabs}>Run code</p>
            </div>
          </div>
          {/* main editor */}
          <div className={styles.code_editor__main}>
            <p> 1. </p>|
          </div>
        </div>
      </div>

      {/* generate button */}
      <div className={styles.button_container}>
        <button className={styles.generate_button}>Save component</button>
      </div>
    </section>
  );
}
