import styles from "./homeContent.module.scss";

import AddIcon from "@mui/icons-material/Add";

import accordian from "../../../image/accordian.png";

import menu from "../../../image/menu.png";

import tabs from "../../../image/tabs.png";

import input from "../../../image/input.png";

import popover from "../../../image/popover.png";

import ElementContext from "../myComponent/ElementModal";

interface ImageTextObject {
  image: string;
  text: string;
}

const textLists: ImageTextObject[] = [
  { image: accordian, text: "Accordion" },
  { image: menu, text: "Menu" },
  { image: tabs, text: "Tabs" },
  { image: input, text: "input" },
  { image: popover, text: "Popover" },
];

export default function HomeContent() {
  return (
    <section className={styles.HomeContent}>
      <div className={styles.HomeContent_heading}>
        {" "}
        <h2>Features </h2>{" "}
        <p>
          {" "}
          Create a folder, select a template, or choose components of your
          choice and customize them.{" "}
        </p>
        {/* button sections */}
        <div className={styles.homeContent_button_wrapper}>
          {/* Template */}
          <button className={styles.homeContent_button}>
            <span> Pick a template </span>
          </button>
          {/* Create folder */}
          <button
            className={`${styles.homeContent_button} ${styles.createFolder_wrapper}`}
          >
            <div className={styles.createFolder}>
              <AddIcon fontSize="medium" />
            </div>
            <span> Create folders </span>
          </button>
          {/* Customise */}
          <button className={styles.homeContent_button}>
            <span> Customise </span>
          </button>
        </div>
      </div>

      {/* Components */}
      <div className={styles.components_preview}>
        {/* Most used */}
        <h3 className={styles.components_heading}>Most used components</h3>

        <div className={` ${styles.layout_wrapper_home}`}>
          <ElementContext imageTextArray={textLists} />
        </div>

        {/* Customised components */}
        <h3 className={styles.customised_example}>Customised example</h3>
        <div
          className={`layout_component_wrapper ${styles.layout_wrapper_home}`}
        >
          <div className="layout_component">
            <span className="layout_component__text">Accordian</span>
          </div>
          <div className="layout_component">
            <span className="layout_component__text">Accordian</span>
          </div>
          <div className="layout_component">
            <span className="layout_component__text">Accordian</span>
          </div>
          <div className="layout_component">
            <span className="layout_component__text">Accordian</span>
          </div>
          <div className="layout_component">
            <span className="layout_component__text">Accordian</span>
          </div>
        </div>
      </div>
    </section>
  );
}
