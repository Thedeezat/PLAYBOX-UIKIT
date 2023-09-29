import React, { useState, useEffect } from "react";
import styles from "../../files.module.scss";
import FolderIcon from "@mui/icons-material/Folder";
import { useItemContext } from "../../../../../../../common/context/AppContext";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import SnackbarComponent from "../../../../../../../common/SnackbarPopup";
import EditIcon from "@mui/icons-material/Edit";
import EditFile from "./editFile/EditFile";

interface ComponentType {
  collectionName: string;
  files: string[];
}

export default function CodeVualt() {
  const { codeArray, setCodeArray } = useItemContext();
  const [openFolder, setOpenFolder] = useState(false);
  const [openedCodeArray, setOpenedCodeArray] = useState<ComponentType>();
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const [openedFile, setOpenedFile] = useState("");
  const [isFileOpened, setIsFileOpened] = useState<boolean>(false);
  const [openCopySnackbar, setOpenCopySnackbar] = useState(false);
  const [openDeleteSnackbar, setOpenDeleteSnackbar] = useState(false);
  const [editFile, setEditFile] = useState<boolean>(false);

  const handleCollectionOpen = (pickedItem: ComponentType) => {
    setOpenFolder(true);
    setOpenedCodeArray(pickedItem);
  };
  const handleArrowBack = () => {
    setOpenFolder(false);
    setOpenedFile("");
    setEditFile(false);
  };

  const handleClickFile = (value: string) => {
    setOpenedFile(value);
    setIsFileOpened(!isFileOpened);
  };

  // Function that adds new line and space to code snippet
  function formatFileContent(content: string) {
    const lines = content.split("\n");
    return lines.map((line, index) => (
      <div key={index} className={styles.codeLine}>
        <span className={styles.lineNumber}>{index + 1}</span>
        <span className={styles.codeText} style={{ paddingLeft: "15px" }}>
          {line}
        </span>
      </div>
    ));
  }
  // File Functions
  const tooptipText = (text: string) => (
    <span className={styles.tooltip_text}>{text}</span>
  );

  // Copy file
  const handleCopyFile = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(openedFile[1])
        .then(() => {
          setOpenCopySnackbar(true);
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
        });
    }
  };

  // Delete file
  const handleDeleteFile = () => {
    setOpenDeleteSnackbar(true);

    if (openedCodeArray && openedFile) {
      const updatedFiles = openedCodeArray.files.filter(
        (file) => file !== openedFile
      );
      setOpenedCodeArray({ ...openedCodeArray, files: updatedFiles });
      setOpenDeleteSnackbar(true);

      console.log(codeArray);
    }
  };

  useEffect(() => {
    if (openedCodeArray && codeArray) {
      const updatedCodeArray = codeArray.map((item) => {
        if (item.collectionName == openedCodeArray.collectionName) {
          return {
            ...item,
            files: openedCodeArray.files,
          };
        }
        return item;
      });

      setCodeArray(updatedCodeArray);
    }
  }, [openedCodeArray, codeArray]);

  return (
    <div className={styles.folder_section}>
      {openFolder ? (
        <section className={styles.openFolder}>
          <div className={styles.openFolder__sidebar}>
            {/* Arrow Back */}
            <div className={styles.openFolder__arrowback}>
              <ArrowBackOutlinedIcon
                className={styles.openFolder__arrowback__icon}
                onClick={handleArrowBack}
                sx={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </div>
            {/* Folders Name */}
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
            {/* Dropdown Sidebar*/}
            {toggleDropdown && (
              <div className={styles.dropdown_texts}>
                {openedCodeArray && (
                  <>
                    {openedCodeArray.files.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleClickFile(item)}
                        className={`${styles.dropdown_texts_fileNames} ${
                          openedFile === item &&
                          styles.dropdown_texts_fileNames_active
                        }`}
                      >
                        <FolderOpenIcon fontSize="large" />
                        {/* <p>{item[0]}</p> */}
                        <p>{item[0]}</p>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
            {/* Dropdown sidebar ends */}
          </div>
          {/* Code File Display */}
          <div className={styles.showFolderCode}>
            <EditFile
              openedCodeArray={openedCodeArray}
              openedFile={openedFile}
              editFile={editFile}
            />

            <div className={styles.showFolderCode__header}>
              <div className={styles.showFolderCode__texts}>
                <p>Code</p>
                {openedFile && (
                  <div className={styles.showFolderCode__actions}>
                    <Tooltip title={tooptipText("Copy")}>
                      <ContentCopyIcon
                        className={styles.copyIcon}
                        onClick={handleCopyFile}
                        fontSize="large"
                        sx={{
                          width: "18px",
                          height: "18px",
                        }}
                      />
                    </Tooltip>
                    {/* <Tooltip title={tooptipText("Edit")}>
                      <EditIcon
                        className={styles.copyIcon}
                        onClick={() => setEditFile(true)}
                        fontSize="large"
                        sx={{
                          width: "18px",
                          height: "18px",
                        }}
                      />
                    </Tooltip> */}
                    <Tooltip title={tooptipText("Delete")}>
                      <DeleteIcon
                        className={`${styles.copyIcon} ${styles.deleteIcon}`}
                        onClick={handleDeleteFile}
                        fontSize="large"
                        sx={{
                          width: "18px",
                          height: "18px",
                        }}
                      />
                    </Tooltip>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.showFolderCode__editor}>
              <div className={`${styles.showFolderCode__editor__value}`}>
                {openedFile ? (
                  formatFileContent(openedFile[1])
                ) : (
                  <span>Click a file to display code snippet </span>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {codeArray &&
            codeArray.map((component, index) => (
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
                    {component.files.length} Files
                  </p>
                </div>
              </div>
            ))}
        </>
      )}
      <SnackbarComponent
        setOpenSnackbar={setOpenCopySnackbar}
        openSnackbar={openCopySnackbar}
        snackbarMessage="The code snippet has been copied"
      />
      <SnackbarComponent
        setOpenSnackbar={setOpenDeleteSnackbar}
        openSnackbar={openDeleteSnackbar}
        snackbarMessage="The code Snippet file has been deleted"
      />
    </div>
  );
}
