import React from "react";
import styles from "../../files.module.scss";
import FolderIcon from "@mui/icons-material/Folder";
import Lottie from "lottie-react";
import folder from "./lottie/folder.json";

export default function CodeVualt() {
  return (
    <div className={styles.folder_section}>
      {/* Folder */}
      <div className={styles.folderComponent}>
        <Lottie animationData={folder} className={styles.folderAnimation} />

        <div className={styles.textContainer}>
          <p>lura</p>
          <p className={styles.fileNumber}>5 Files</p>
        </div>
      </div>

      {/* Folder */}
      <div className={styles.folderComponent}>
        <Lottie animationData={folder} className={styles.folderAnimation} />

        <div className={styles.textContainer}>
          <p>Random</p>
          <p className={styles.fileNumber}>4 Files</p>
        </div>
      </div>

      {/* Folder */}
      <div className={styles.folderComponent}>
        <Lottie animationData={folder} className={styles.folderAnimation} />

        {/* <FolderIcon
          className={styles.folderIcon}
          fontSize="large"
          sx={{
            width: "70px",
            height: "70px",
          }}
        /> */}
        <div className={styles.textContainer}>
          <p>Random</p>
          <p className={styles.fileNumber}>2 Files</p>
        </div>
      </div>

      {/* Folder */}
      <div className={styles.folderComponent}>
        <Lottie animationData={folder} className={styles.folderAnimation} />

        <div className={styles.textContainer}>
          <p>Random</p>
          <p className={styles.fileNumber}>8 Files</p>
        </div>
      </div>

      {/* Folder */}
      <div className={styles.folderComponent}>
        <Lottie animationData={folder} className={styles.folderAnimation} />

        <div className={styles.textContainer}>
          <p>Random</p>
          <p className={styles.fileNumber}>4 Files</p>
        </div>
      </div>

      {/* Folder */}
      <div className={styles.folderComponent}>
        <Lottie animationData={folder} className={styles.folderAnimation} />

        <div className={styles.textContainer}>
          <p>Random</p>
          <p className={styles.fileNumber}>4 Files</p>
        </div>
      </div>

      {/* Folder */}
      <div className={styles.folderComponent}>
        <Lottie animationData={folder} className={styles.folderAnimation} />

        <div className={styles.textContainer}>
          <p>Random</p>
          <p className={styles.fileNumber}>4 Files</p>
        </div>
      </div>

      {/* Folder */}
      <div className={styles.folderComponent}>
        <Lottie animationData={folder} className={styles.folderAnimation} />

        <div className={styles.textContainer}>
          <p>Random</p>
          <p className={styles.fileNumber}>4 Files</p>
        </div>
      </div>
    </div>
  );
}
