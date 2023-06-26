import TabItem from "../../../tabContexts/TabItem";

import styles from "../../../../../dashboardSidebar/sidebar.module.scss";

type DropdownProps = {
  showDropDown: boolean;
  selectedTab: string;
  setSelectedTab: (index: string) => void;
  setPageName: (pageName: string) => void;
};
export default function Dropdown({
  showDropDown,
  setPageName,
  selectedTab,
  setSelectedTab,
}: DropdownProps) {
  // const [showdropdown, setShowDropdown] = useState<boolean>(false)

  return (
    <>
      {/* components */}
      <div
        className={`${styles.dropdown_wrapper} ${
          showDropDown ? styles.dropdown_show : styles.dropdown_hide
        }`}
      >
        {/* Layout */}
        <TabItem
          title="Layout"
          setPageName={setPageName}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          index="tab6"
          componentLists={true}
          classname={styles.dropdown_active}
        />
        {/* Forms */}
        <TabItem
          title="Forms"
          setPageName={setPageName}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          index="tab7"
          componentLists={true}
          classname={styles.dropdown_active}
        />
        {/* Feedbacks */}
        <TabItem
          title="Feedbacks"
          setPageName={setPageName}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          index="tab8"
          componentLists={true}
          classname={styles.dropdown_active}
        />
        {/* Utilities */}
        <TabItem
          title="Utilities"
          setPageName={setPageName}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          index="tab9"
          componentLists={true}
          classname={styles.dropdown_active}
        />
        {/* Data display */}
        <TabItem
          title="Data display"
          setPageName={setPageName}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          index="tab10"
          componentLists={true}
          classname={styles.dropdown_active}
        />
      </div>
    </>
  );
}
