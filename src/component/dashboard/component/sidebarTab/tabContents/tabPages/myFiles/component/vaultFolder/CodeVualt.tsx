import React, { useState } from "react";
import styles from "../../files.module.scss";
import FolderIcon from "@mui/icons-material/Folder";
import { useItemContext } from "../../../../../../../common/context/AppContext";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

interface ComponentType {
  collectionName: string;
  fileNames: string[];
  codeValue: string;
}

export default function CodeVualt() {
  const { codeArray } = useItemContext();
  const [openFolder, setOpenFolder] = useState(false);
  const [openedCodeArray, setOpenedCodeArray] = useState<ComponentType>();
  const [toggleDropdown, setToggleDropdown] = useState(true);

  const handleCollectionOpen = (pickedItem: ComponentType) => {
    setOpenFolder(true);
    setOpenedCodeArray(pickedItem);
    console.log(pickedItem);
  };

  return (
    <div className={styles.folder_section}>
      {openFolder ? (
        <section className={styles.openFolder}>
          <div className={styles.openFolder__sidebar}>
            {/* Arrow Back */}
            <div className={styles.openFolder__arrowback}>
              <ArrowBackOutlinedIcon
                className={styles.openFolder__arrowback__icon}
                onClick={() => setOpenFolder(false)}
                sx={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </div>
            <div
              className={`${styles.openFolder__sidebarRight_container} ${
                !toggleDropdown && styles.openFolder_active
              }`}
            >
              <div
                className={styles.openFolder__sidebarRight}
                onClick={() => setToggleDropdown(!toggleDropdown)}
              >
                <ArrowRightIcon
                  fontSize="large"
                  sx={{
                    width: "25px",
                    height: "25px",
                  }}
                  className={`${styles.folderIcon_arrow}`}
                />
                <FolderIcon
                  fontSize="medium"
                  className={styles.folderIcon}
                  sx={{
                    width: "24px",
                    height: "24px",
                  }}
                />
                {openedCodeArray && (
                  <div>
                    <p>{openedCodeArray.collectionName}</p>
                  </div>
                )}
              </div>
            </div>
            {/* Dropdown */}
            {toggleDropdown && (
              <div className={styles.dropdown_texts}>
                {openedCodeArray && (
                  <>
                    {openedCodeArray.fileNames.map((item, index) => (
                      <div className={styles.dropdown_texts_fileNames}>
                        <FolderOpenIcon fontSize="large" />
                        <p key={index}>{item}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
            {/* Dropdown ends */}
          </div>
          <div className={styles.showFolderCode}>
            <div className={styles.showFolderCode__header}>
              <div className={styles.showFolderCode__texts}>
                <p>App.txt</p>

                <div className={styles.showFolderCode__actions}>
                  <p>Copy</p>
                  <p>Edit</p>
                </div>
              </div>
            </div>
            <div className={styles.showFolderCode__editor}></div>
          </div>
        </section>
      ) : (
        <>
          {codeArray &&
            codeArray.map((component, index) => (
              <>
                <div
                  className={styles.folderComponent}
                  key={index}
                  onClick={() => handleCollectionOpen(component)}
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
              </>
            ))}
        </>
      )}
    </div>
  );
}
