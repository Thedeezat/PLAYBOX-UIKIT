import styles from "./custom.module.scss";
import CustomCodeEditor from "./component/CodeEditor";
import RecentComponents from "./component/RecentCompnts";
import LanguageDropdown from "./component/LanguageDropdown";

export default function Custom() {
  return (
    <section className={styles.custom}>
      <div className={styles.custom_heading}>
        <h3 className={styles.custom_heading_intro}>
          {" "}
          Create custom components{" "}
        </h3>
        {/* list  */}
        <div className={styles.recentComponents_container}>
          <p className={styles.recentComponents__head}>
            Choose tools to work with
          </p>
          <LanguageDropdown />
        </div>

        {/* theme */}
      </div>
      {/* Code Editor */}
      <CustomCodeEditor />

      {/* generate button */}
      <div className={styles.button_container}>
        <button className={styles.generate_button}>Save component</button>
      </div>
    </section>
  );
}
