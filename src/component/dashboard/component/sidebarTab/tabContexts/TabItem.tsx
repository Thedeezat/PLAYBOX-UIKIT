import React from "react";

import styles from "../../../dashboardSidebar/sidebar.module.scss";

type Props = {
  icon?: React.ReactElement;
  title: string;
  componentLists?: boolean;
  classname: React.ReactNode;
  index: string;
  selectedTab: string;
  jumpComponent?: React.ReactNode;
  setSelectedTab: (index: string) => void;
  setPageName: (pageName: string) => void;
  setShowDropdown?: (showdropdown: boolean) => void;
};

const TabItem: React.FunctionComponent<Props> = ({
  icon,
  title,
  classname,
  jumpComponent,
  selectedTab,
  setSelectedTab,
  index,
  setPageName,
  componentLists,
  setShowDropdown,
}: Props) => {
  const handleClick = () => {
    setSelectedTab(index);
    setPageName(title);
    setShowDropdown && setShowDropdown(true);
  };

  return (
    <>
      <div
        className={`${styles.menu_items} ${
          selectedTab === index ? classname : ""
        }`}
        onClick={handleClick}
      >
        {icon}
        <>
          {jumpComponent ? (
            <div>{jumpComponent}</div>
          ) : (
            <p className={componentLists ? styles.dropdown_text : ""}>
              {title}
            </p>
          )}
        </>
      </div>
    </>
  );
};

export default TabItem;
