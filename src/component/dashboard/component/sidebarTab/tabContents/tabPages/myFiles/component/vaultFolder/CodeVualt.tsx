import React, { useState } from "react";
import styles from "../../files.module.scss";
import FolderIcon from "@mui/icons-material/Folder";
import { useItemContext } from "../../../../../../../common/context/AppContext";

export default function CodeVualt() {
  const { codeArray } = useItemContext();
  const [openFolder, setOpenFolder] = useState(false);

  const handleCollectionOpen = () => {
    console.log("heyy");
    setOpenFolder(true);
  };

  return (
    <div className={styles.folder_section}>
      {codeArray &&
        codeArray.map((component, index) => (
          <div
            className={styles.folderComponent}
            key={index}
            onClick={handleCollectionOpen}
          >
            {/* Folder */}
            <FolderIcon
              className={styles.folderIcon}
              fontSize="large"
              sx={{
                width: "58px",
                height: "58px",
              }}
            />
            <div className={styles.textContainer}>
              <p>{component.collectionName}</p>
              <p className={styles.fileNumber}>
                {" "}
                {component.fileNames.length} Files
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
