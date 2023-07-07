import React from "react";
import styles from "../custom.module.scss";

export default function CustomCodeEditor() {
  return (
    <div className={styles.custom_board}>
      <div className={styles.code_editor__header}>
        {/* code tabs */}
        <div className={styles.languageType__tab}>
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
      <textarea
        className={styles.code_editor}
        placeholder="Type HTML code here"
      ></textarea>
    </div>
  );
}
