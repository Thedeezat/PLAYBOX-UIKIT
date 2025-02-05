import styles from "./homeContent.module.scss";
import AddIcon from "@mui/icons-material/Add";
import accordian from "../../../image/accordian.png";
import menu from "../../../image/menu.png";
import tabs from "../../../image/tabs.png";
import input from "../../../image/input.png";
import popover from "../../../image/popover.png";
import custom from "../../../image/custom.png";
import ElementContext from "../myComponent/ElementModal";
import { useItemContext } from "../../../../../common/context/AppContext";
import TabItem from "../../../tabContexts/TabItem";
import GridViewIcon from "@mui/icons-material/GridView";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import {
  ImageCarousels,
  Charts,
  SearchFilters,
  MapIntegration,
  Popover,
  FileUpload,
  SocialShare,
  Ratings,
  FeedbackForm,
  ErrorHandler,
} from "../../../../../../../constants/db";

interface ImageTextObject {
  image: string;
  text: string;
  sourceCode: string;
}
type Props = {
  setPageName: (pageName: string) => void;
  setSelectedTab: (index: string) => void;
  selectedTab: string;
  setShowDropdown?: (showdropdown: boolean) => void;
};

const textLists: ImageTextObject[] = [
  { image: accordian, text: "Image Carousels", sourceCode: ImageCarousels },
  { image: menu, text: "Charts and Graphs", sourceCode: Charts },
  { image: tabs, text: "Search Filters", sourceCode: SearchFilters },
  { image: input, text: "Map Integration", sourceCode: MapIntegration },
  { image: popover, text: "Popover", sourceCode: Popover },
];

const customLists: ImageTextObject[] = [
  { image: custom, text: "File Upload", sourceCode: FileUpload },
  { image: custom, text: "Social Sharing", sourceCode: SocialShare },
  { image: custom, text: "Rating and Reviews", sourceCode: Ratings },
  { image: custom, text: "Feedback Forms", sourceCode: FeedbackForm },
  { image: custom, text: "Error Handling", sourceCode: ErrorHandler },
];

const createFolder = (
  <button
    className={`${styles.homeContent_button} ${styles.createFolder_wrapper}`}
  >
    <div className={styles.createFolder}>
      <AddIcon fontSize="medium" className={styles.createFolder__Icon} />
    </div>
    <span> Example components </span>
    <p>A collection of boilerplates to kickstart your next project.</p>
  </button>
);
const customize = (
  <button className={styles.homeContent_button}>
    <div className={styles.createFolder}>
      <AutoFixHighIcon
        fontSize="medium"
        className={styles.createFolder__Icon}
      />
    </div>
    <span> Customizing components </span>
    <p>Learn how to save and customization your snippets.</p>
  </button>
);
const documentation = (
  <button className={styles.homeContent_button}>
    <div className={styles.createFolder}>
      <GridViewIcon fontSize="medium" className={styles.createFolder__Icon} />
    </div>
    <span> Documentation </span>
    <p>Learn PLAYBOX basics and tailor snippets to your needs.</p>
  </button>
);
export default function HomeContent({
  setPageName,
  setSelectedTab,
  selectedTab,
  setShowDropdown,
}: Props) {
  return (
    <section className={styles.HomeContent}>
      <div className={styles.HomeContent_heading}>
        {" "}
        <h2>Start now </h2>{" "}
        <p>
          {" "}
          Get started with Material UI today through some of these useful
          resources:
        </p>
        {/* button sections */}
        <div className={styles.homeContent_button_wrapper}>
          {/* documentation */}
          <TabItem
            title="Docs"
            setPageName={setPageName}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            index="tab2"
            classname={styles.item_active}
            jumpComponent={documentation}
            setShowDropdown={setShowDropdown}
          />

          {/* customise */}
          <TabItem
            title="Layout"
            setPageName={setPageName}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            index="tab6"
            classname={styles.item_active}
            jumpComponent={createFolder}
            setShowDropdown={setShowDropdown}
          />
          {/* Create folder */}
          <TabItem
            title="Customize"
            setPageName={setPageName}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            index="tab4"
            classname={styles.item_active}
            jumpComponent={customize}
          />
        </div>
      </div>

      {/* Components */}
      <div className={styles.components_preview}>
        {/* Most used */}
        <h3 className={styles.components_heading}>Most used components</h3>

        <div className={` ${styles.layout_component_wrapper}`}>
          <ElementContext imageTextArray={textLists} />
        </div>

        {/* Customised components */}
        <h3 className={styles.customised_example}>Customised Components</h3>
        <div
          className={`layout_component_wrapper ${styles.layout_component_wrapper}`}
        >
          <ElementContext imageTextArray={customLists} />
        </div>
        <p className={styles.laptopView}>
          View Additional Components in Desktop Mode.
        </p>
      </div>
    </section>
  );
}
