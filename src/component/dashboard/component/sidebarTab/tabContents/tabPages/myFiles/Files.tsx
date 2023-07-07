import styles from "./files.module.scss";

import TabItem from "../../../tabContexts/TabItem";

type Props = {
  setPageName: (pageName: string) => void;
  setSelectedTab: (index: string) => void;
  selectedTab: string;
  setShowDropdown?: (showdropdown: boolean) => void;
};

export default function Files({
  setPageName,
  setSelectedTab,
  selectedTab,
  setShowDropdown,
}: Props) {
  const customize = (
    <button className={styles.files__btn}> Customize components </button>
  );
  const checkoutComponent = (
    <button className={styles.files__btn}> Check out components </button>
  );

  return (
    <section className={styles.files}>
      <h2 className={styles.files__heading}>Get started</h2>
      <p className={styles.files__info}> Nothing has been archived. </p>
      <div className={styles.files_btn_wrapper}>
        {/* custom components */}
        <TabItem
          title="Customize"
          setPageName={setPageName}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          index="tab4"
          classname={styles.item_active}
          jumpComponent={customize}
        />

        {/* check components */}
        <TabItem
          title="Layout"
          setPageName={setPageName}
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          index="tab6"
          classname={styles.item_active}
          jumpComponent={checkoutComponent}
          setShowDropdown={setShowDropdown}
        />
      </div>
    </section>
  );
}
