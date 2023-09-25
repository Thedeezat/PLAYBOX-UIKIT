import styles from "./docs.module.scss";
import { DiReact } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiSass } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

export default function Docs() {
  return (
    <div className={styles.home_content}>
      {" "}
      {/* Get started */}
      <div className={styles.get_started}>
        <h4 className={styles.getStarted_overview}> PLAYBOX - Overview</h4>

        <p className={styles.getStarted_text}>
          {" "}
          PLAYBOX is an open source tool with your favorite frameworks.{" "}
        </p>

        {/* Introduction */}
        <h3 className={styles.getStarted_heading}> Introduction </h3>
        <p>
          {" "}
          PLAYBOX makes it simple to import pre-existing components, customize
          them, and save them.{" "}
        </p>
        <p>
          It comes with more than 100 adjustable components, modern
          functionality, and detailed <br /> themes, your custom design could be
          easily implemented without setup.
        </p>

        {/* Framework it works on */}
        <h3 className={styles.getStarted_heading}> Framework Details </h3>
        <p>
          {" "}
          Playbox comes with the most used and loved Framework for frontend
          developer.{" "}
        </p>
        {/* react framework */}
        <div className={styles.framework_types_wrapper}>
          {/* create React */}
          <div className={styles.framework_types}>
            <DiReact className={styles.framework_icon} />
            <span> Create React App </span>
          </div>
          {/* Angular */}
          <div
            className={`${styles.framework_types} ${styles.framework_types__angular}`}
          >
            <DiAngularSimple className={styles.framework_icon} />
            <span> Angular.js </span>
          </div>
          {/* Typescript */}
          <div
            className={`${styles.framework_types} ${styles.framework_types__typrscript}`}
          >
            <SiTypescript className={styles.framework_icon} />
            <span> Typescript </span>
          </div>
          {/* Next */}
          <div
            className={`${styles.framework_types} ${styles.framework_types__next}`}
          >
            <TbBrandNextjs className={styles.framework_icon} />
            <span> Next.js </span>
          </div>
          {/* SASS */}
          <div
            className={`${styles.framework_types} ${styles.framework_types__sass}`}
          >
            <DiSass className={styles.framework_icon} />
            <span> Sass </span>
          </div>
          {/* Tailwind */}
          <div
            className={`${styles.framework_types} ${styles.framework_types__tailwind}`}
          >
            <SiTailwindcss className={styles.framework_icon} />
            <span> Tailwind </span>
          </div>
          {/* Bootstrap */}
          <div
            className={`${styles.framework_types} ${styles.framework_types__bootstrap}`}
          >
            <BsBootstrapFill className={styles.framework_icon} />
            <span> Bootstrap </span>
          </div>
        </div>

        {/* Browser support */}
        <div className={styles.browser_support}>
          <h3 className={styles.getStarted_heading}> Browser support </h3>
          <p>
            All current browsers are compatible with Playbox components, making
            it simpler to bind support to a particular version.
          </p>
        </div>

        {/* Import File */}
        <div className={styles.import_file}>
          <h3
            className={`${styles.getStarted_heading} ${styles.getStarted_heading__import}`}
          >
            {" "}
            Code Editor and File Management{" "}
          </h3>
          <h4 className={styles.getStarted_subheading}>
            Import and Write Code:
          </h4>
          <p>
            - Import existing code files into the text editor or write new code
            directly in the editor.
          </p>
          <p>- Save your code for easy access and future editing.</p>
          <h4 className={styles.getStarted_subheading}>Code Vault:</h4>
          <p>
            {" "}
            - Access your saved components and folders in the Code Vault
            section.
          </p>
          <p> - View, copy, and manage your securely stored components.</p>
          <h4 className={styles.getStarted_subheading}>Folder Management:</h4>
          <p> - Create and organize multiple files within folders.</p>
          <p> - Conveniently manage your code structure in one place.</p>
        </div>

        {/* Customization */}
        <div className={styles.import_file}>
          <h3 className={styles.getStarted_heading}>
            {" "}
            Customization and Code Editor Options
          </h3>
          <p>
            {" "}
            - Access the Code Editor and create files and folders from the
            "Customize" tab.
          </p>
          <p>
            {" "}
            -Choose from a variety of themes to personalize your coding
            environment.
          </p>{" "}
          <p>
            {" "}
            - Select from 12 different programming languages for coding
            versatility.
          </p>
          <p>
            {" "}
            -Benefit from auto-complete and syntax highlighting for efficient
            coding.
          </p>
        </div>
        {/*  Prebuilt */}
        <div className={styles.import_file}>
          <h3 className={styles.getStarted_heading}> Prebuilt Components </h3>

          <p>
            {" "}
            - Explore a rich library of prebuilt components designed for
            software developers.
          </p>
          <p>
            {" "}
            - Access both backend and frontend components to streamline
            development.
          </p>

          <p>
            {" "}
            - Boost your productivity with readily available building blocks for
            your projects.
          </p>
        </div>
        {/* End of prebuilt */}
      </div>
    </div>
  );
}
