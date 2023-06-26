import Lottie from "lottie-react";

import box from "../../../../../../../asset/lotties/box.json";

import styles from "./inbox.module.scss";

export default function Inbox() {
  return (
    <div className={styles.inbox}>
      <Lottie animationData={box} className={styles.inbox_box} />

      <h4 className={styles.inbox__heading}>Inbox is currently empty</h4>
      <p className={styles.inbox__info}>
        {" "}
        Every activity will be displayed here.{" "}
      </p>
    </div>
  );
}
