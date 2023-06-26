import React from "react";

import styles from "../tabContents/tabContent.module.scss";

type Props = {
  children: React.ReactElement;
  index: string;
  selectedTab: string;
};

const TabContent = ({ children, index, selectedTab }: Props) => {
  return selectedTab === index ? (
    <div className={styles.dashboard_content}>{children}</div>
  ) : null;
};

export default TabContent;
