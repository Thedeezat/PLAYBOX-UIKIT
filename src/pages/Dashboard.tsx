import { useState } from "react";

import styles from "../component/dashboard/dashboard.module.scss";

import DashboardSidebar from "../component/dashboard/dashboardSidebar/Sidebar";

import DashboardNav from "../component/dashboard/dashboardNav/DashboardNav";

export default function Dashboard() {
  const [pageName, setPageName] = useState("home");

  return (
    <section className={styles.dashboard}>
      <DashboardNav pageName={pageName} />
      <DashboardSidebar setPageName={setPageName} />
    </section>
  );
}
