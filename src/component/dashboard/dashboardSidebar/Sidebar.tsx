import { useState } from "react";
import styles from "./sidebar.module.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TabItem from "../component/sidebarTab/tabContexts/TabItem";
import TabWrapper from "../component/sidebarTab/tabContexts/TabWrapper";
import TabContent from "../component/sidebarTab/tabContexts/TabContent";
import HomeContent from "../component/sidebarTab/tabContents/tabPages/myHome/HomeContent";
import Docs from "../component/sidebarTab/tabContents/tabPages/documentation/Docs";
import Files from "../component/sidebarTab/tabContents/tabPages/myFiles/Files";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import Custom from "../component/sidebarTab/tabContents/tabPages/customise/Custom";
import Inbox from "../component/sidebarTab/tabContents/tabPages/myInbox/Inbox";
import Dropdown from "../component/sidebarTab/tabContents/tabPages/myComponent/Dropdown";
import LayoutPage from "../component/sidebarTab/tabContents/tabPages/myComponent/layout_compnt/LayoutPage";
import FormsPage from "../component/sidebarTab/tabContents/tabPages/myComponent/forms_compnt/FormsPage";
import FeedbackPage from "../component/sidebarTab/tabContents/tabPages/myComponent/feedback_compnt/FeedbackPage";
import UtilitiesPage from "../component/sidebarTab/tabContents/tabPages/myComponent/utilities_compnt/UtilitiesPage";
import DataDisplay from "../component/sidebarTab/tabContents/tabPages/myComponent/dataDisplay_compnt/DataDisplay";

type Props = {
  setPageName: (pageName: string) => void;
};

export default function DashboardSidebar({ setPageName }: Props) {
  const [selectedTab, setSelectedTab] = useState<string>("tab1");
  const [showdropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropDown = () => {
    setShowDropdown(!showdropdown);
  };

  return (
    <div className={styles.sidebar}>
      <section className={styles.dashboard_sidebar}>
        <div className={styles.dashboard_sidebar__wrapper}>
          {/* Sidebar Tabs */}
          <TabWrapper classname={styles.sidebar_menu}>
            {/* Home */}
            <TabItem
              title="Home"
              setPageName={setPageName}
              setSelectedTab={setSelectedTab}
              selectedTab={selectedTab}
              index="tab1"
              classname={styles.item_active}
              icon={
                <HomeOutlinedIcon
                  fontSize="medium"
                  className={styles.menu_items_icon}
                />
              }
            />
            {/* Intro */}
            <TabItem
              title="Docs"
              setPageName={setPageName}
              index="tab2"
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              classname={styles.item_active}
              icon={
                <AssignmentOutlinedIcon
                  fontSize="medium"
                  className={styles.menu_items_icon}
                />
              }
            />
            {/* Files */}
            <TabItem
              title="Code Vault"
              index="tab3"
              setPageName={setPageName}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              classname={styles.item_active}
              icon={
                <EditOutlinedIcon
                  fontSize="medium"
                  className={styles.menu_items_icon}
                />
              }
            />
            {/* Custom components */}
            <TabItem
              title="Customize"
              setPageName={setPageName}
              index="tab4"
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              classname={styles.item_active}
              icon={
                <DashboardCustomizeIcon
                  fontSize="medium"
                  className={styles.menu_items_icon}
                />
              }
            />
            {/* Inbox */}
            <TabItem
              title="Inbox"
              setPageName={setPageName}
              index="tab5"
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              classname={styles.item_active}
              icon={
                <NotificationsNoneOutlinedIcon
                  fontSize="medium"
                  className={styles.menu_items_icon}
                />
              }
            />
          </TabWrapper>

          {/* Comonents */}
          <div className={styles.sidebar_components}>
            {/* Components */}
            <div onClick={toggleDropDown}>
              <div className={styles.sidebar_components_container}>
                <div className={styles.sidebarComponent_icon_wrapper}>
                  <GridViewIcon
                    fontSize="medium"
                    className={styles.sidebarComponent_icon}
                  />
                </div>
                <span> Components </span>
                <ArrowDropDownIcon
                  className={`${styles.arrow_down} ${
                    showdropdown && styles.arrow_close
                  }`}
                />
              </div>
            </div>
            {/* Dropdown */}
            <Dropdown
              showDropDown={showdropdown}
              setPageName={setPageName}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            {/* Template */}
            <div className={styles.sidebar_components_container}>
              <div className={styles.sidebarComponent_icon_wrapper}>
                <ViewQuiltIcon
                  fontSize="medium"
                  className={styles.sidebarComponent_icon}
                />
              </div>
              <span> Template </span>
            </div>

            {/* Community */}
            <div className={styles.sidebar_components_container}>
              <div className={styles.sidebarComponent_icon_wrapper}>
                <ForumOutlinedIcon
                  fontSize="small"
                  className={styles.sidebarComponent_icon}
                />
              </div>
              <span> Community </span>
            </div>
          </div>

          {/* donate */}
          <div className={styles.sidebar_donate}>
            <p> Want to buy me a coffee 🌚 </p>
            <button> Go ahead </button>
          </div>

          {/* user */}
          <div className={styles.sidebar_help}>
            <p>
              {" "}
              <HelpOutlineOutlinedIcon
                fontSize="medium"
                className={styles.sidebarHelp_icon}
              />
              <span> Help</span>{" "}
            </p>
            <p>
              <StarBorderIcon
                fontSize="medium"
                className={styles.sidebarHelp_icon}
              />
              <span> Updates</span>{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Tab contents */}
      <div>
        {/* Home tab */}
        <TabContent index="tab1" selectedTab={selectedTab}>
          <HomeContent />
        </TabContent>
        {/* Docs tab */}
        <TabContent selectedTab={selectedTab} index="tab2">
          <Docs />
        </TabContent>
        {/* Files Tabs */}
        <TabContent selectedTab={selectedTab} index="tab3">
          <Files
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            setPageName={setPageName}
            setShowDropdown={setShowDropdown}
          />
        </TabContent>
        {/* Custom tabs */}
        <TabContent selectedTab={selectedTab} index="tab4">
          <Custom />
        </TabContent>
        {/* Inbox tabs */}
        <TabContent selectedTab={selectedTab} index="tab5">
          <Inbox />
        </TabContent>
        {/* Layout component tabs */}
        <TabContent selectedTab={selectedTab} index="tab6">
          <LayoutPage />
        </TabContent>
        {/* Form component tab */}
        <TabContent selectedTab={selectedTab} index="tab7">
          <FormsPage />
        </TabContent>
        {/* Feedback component tab */}
        <TabContent selectedTab={selectedTab} index="tab8">
          <FeedbackPage />
        </TabContent>
        {/* Utitlities component tab */}
        <TabContent selectedTab={selectedTab} index="tab9">
          <UtilitiesPage />
        </TabContent>
        {/* Data display component tab */}
        <TabContent selectedTab={selectedTab} index="tab10">
          <DataDisplay />
        </TabContent>
      </div>
    </div>
  );
}
